import { useState, useEffect } from 'react';
import api from '../../utils/api';
import {
    FaUsers, FaCalendarAlt, FaCamera, FaClipboardList, FaEnvelope, FaChartBar,
    FaPlus, FaTrash, FaCheck, FaSpinner, FaEdit
} from 'react-icons/fa';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [loading, setLoading] = useState(false);
    const [stats, setStats] = useState({});
    const [students, setStudents] = useState([]);
    const [trials, setTrials] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchData(activeTab);
    }, [activeTab]);

    const fetchData = async (tab) => {
        setLoading(true);
        try {
            if (tab === 'overview') {
                const res = await api.get('/admin/stats');
                setStats(res.data);
            } else if (tab === 'students') {
                const res = await api.get('/admin/students');
                setStudents(res.data);
            } else if (tab === 'trials') {
                const res = await api.get('/admin/trials');
                setTrials(res.data);
            } else if (tab === 'messages') {
                const res = await api.get('/admin/messages');
                setMessages(res.data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // --- Handlers ---
    const handleApproveTrial = async (id) => {
        try {
            await api.put(`/admin/trials/${id}`, { status: 'approved' });
            fetchData('trials');
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdateBelt = async (id, newBelt) => {
        try {
            await api.put(`/admin/students/${id}/belt`, { beltLevel: newBelt });
            fetchData('students');
        } catch (err) {
            console.error(err);
        }
    };

    const handleMarkAttendance = async (userId) => {
        try {
            await api.post('/admin/attendance', { userId, status: 'present' });
            alert('Attendance marked!');
            fetchData('students'); // Refresh to show updated counts if we displayed them
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex">
            {/* Sidebar */}
            <div className="w-64 bg-secondary text-white hidden md:block fixed h-full">
                <div className="p-6 text-2xl font-bold border-b border-gray-700">Admin Panel</div>
                <nav className="mt-6">
                    <SidebarItem icon={<FaChartBar />} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
                    <SidebarItem icon={<FaUsers />} label="Students" active={activeTab === 'students'} onClick={() => setActiveTab('students')} />
                    <SidebarItem icon={<FaClipboardList />} label="Trial Requests" active={activeTab === 'trials'} onClick={() => setActiveTab('trials')} />
                    <SidebarItem icon={<FaEnvelope />} label="Messages" active={activeTab === 'messages'} onClick={() => setActiveTab('messages')} />
                    {/* <SidebarItem icon={<FaCamera />} label="Gallery" active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} /> */}
                </nav>
            </div>

            {/* Content */}
            <div className="flex-1 md:ml-64 p-8">
                <div className="md:hidden mb-6">
                    {/* Mobile Nav Placeholder - In real app, use a dropdown or off-canvas */}
                    <select
                        className="w-full p-2 border rounded"
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                    >
                        <option value="overview">Overview</option>
                        <option value="students">Students</option>
                        <option value="trials">Trials</option>
                        <option value="messages">Messages</option>
                    </select>
                </div>

                {loading && <div className="text-center py-4"><FaSpinner className="animate-spin inline-block mr-2" /> Loading...</div>}

                {!loading && activeTab === 'overview' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard title="Total Students" value={stats.totalStudents || 0} icon={<FaUsers />} color="bg-blue-500" />
                            <StatCard title="Pending Trials" value={stats.pendingTrials || 0} icon={<FaClipboardList />} color="bg-orange-500" />                        </div>
                    </div>
                )}

                {!loading && activeTab === 'students' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Student Management</h2>
                        <div className="bg-white rounded-lg shadow overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Belt</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {students.map(student => (
                                        <tr key={student._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                                <div className="text-sm text-gray-500">{student.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <select
                                                    value={student.beltLevel}
                                                    onChange={(e) => handleUpdateBelt(student._id, e.target.value)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                                                >
                                                    <option>White Belt</option>
                                                    <option>Yellow Belt</option>
                                                    <option>Green Belt</option>
                                                    <option>Blue Belt</option>
                                                    <option>Red Belt</option>
                                                    <option>Black Belt</option>
                                                </select>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {student.attendanceCount} Classes
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    onClick={() => handleMarkAttendance(student._id)}
                                                    className="text-green-600 hover:text-green-900 mr-4"
                                                    title="Mark Present Today"
                                                >
                                                    <FaCheck /> Mark Present
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {!loading && activeTab === 'trials' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Trial Requests</h2>
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <ul className="divide-y divide-gray-200">
                                {trials.map(trial => (
                                    <li key={trial._id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{trial.name} - {trial.age} yrs</p>
                                            <p className="text-sm text-gray-500">{trial.email} | {trial.phone}</p>
                                            <p className="text-xs text-gray-400">Pref: {new Date(trial.preferredDate).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${trial.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {trial.status}
                                            </span>
                                            {trial.status === 'pending' && (
                                                <button
                                                    onClick={() => handleApproveTrial(trial._id)}
                                                    className="ml-4 text-primary hover:text-red-700 text-sm font-medium"
                                                >
                                                    Approve
                                                </button>
                                            )}
                                        </div>
                                    </li>
                                ))}
                                {trials.length === 0 && <li className="p-4 text-center text-gray-500">No pending trial requests.</li>}
                            </ul>
                        </div>
                    </div>
                )}

                {!loading && activeTab === 'messages' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>
                        <div className="space-y-4">
                            {messages.map(msg => (
                                <div key={msg._id} className="bg-white rounded-lg shadow p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-bold text-lg">{msg.subject || 'No Subject'}</h3>
                                            <p className="text-sm text-gray-500">From: {msg.name} ({msg.email})</p>
                                        </div>
                                        <span className="text-xs text-gray-400">{new Date(msg.date).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-gray-700">{msg.message}</p>
                                </div>
                            ))}
                            {messages.length === 0 && <p className="text-center text-gray-500">No messages found.</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center px-6 py-3 text-left transition ${active ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
    >
        <span className="mr-3">{icon}</span>
        {label}
    </button>
);

const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white rounded-lg shadow p-6 flex items-center">
        <div className={`p-4 rounded-full text-white mr-4 ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
        </div>
    </div>
);

export default AdminDashboard;
