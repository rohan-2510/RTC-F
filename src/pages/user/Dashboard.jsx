import { useState, useEffect } from 'react';
import api from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaCalendarCheck, FaMedal, FaEdit, FaSpinner, FaCheck } from 'react-icons/fa';

const UserDashboard = () => {
    const { user, loadUser } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(false);

    // Profile Edit State
    const [isEditing, setIsEditing] = useState(false);
    const [editFormData, setEditFormData] = useState({
        name: '',
        phone: '',
        age: ''
    });
    const [updateSuccess, setUpdateSuccess] = useState('');

    useEffect(() => {
        if (activeTab === 'attendance') {
            fetchAttendance();
        }
        if (user) {
            setEditFormData({
                name: user.name || '',
                phone: user.phone || '',
                age: user.age || ''
            });
        }
    }, [activeTab, user]);

    const fetchAttendance = async () => {
        setLoading(true);
        try {
            const res = await api.get('/user/attendance');
            setAttendance(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            await api.put('/user/profile', editFormData);
            setUpdateSuccess('Profile updated successfully!');
            setIsEditing(false);
            // Reload user context
            setTimeout(() => setUpdateSuccess(''), 3000);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bg-light min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-secondary">Student Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Sidebar Navigation */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 bg-secondary text-white text-center">
                                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold">
                                    {user?.name?.charAt(0)}
                                </div>
                                <h2 className="font-bold text-lg">{user?.name}</h2>
                                <p className="text-gray-400 text-sm">{user?.beltLevel}</p>
                            </div>
                            <nav className="flex flex-col">
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`px-6 py-4 text-left font-medium border-b border-gray-100 hover:bg-gray-50 flex items-center ${activeTab === 'profile' ? 'text-primary border-l-4 border-l-primary' : 'text-gray-600'}`}
                                >
                                    <FaUser className="mr-3" /> Profile
                                </button>
                                <button
                                    onClick={() => setActiveTab('attendance')}
                                    className={`px-6 py-4 text-left font-medium border-b border-gray-100 hover:bg-gray-50 flex items-center ${activeTab === 'attendance' ? 'text-primary border-l-4 border-l-primary' : 'text-gray-600'}`}
                                >
                                    <FaCalendarCheck className="mr-3" /> Attendance
                                </button>
                                <button
                                    onClick={() => setActiveTab('progress')}
                                    className={`px-6 py-4 text-left font-medium hover:bg-gray-50 flex items-center ${activeTab === 'progress' ? 'text-primary border-l-4 border-l-primary' : 'text-gray-600'}`}
                                >
                                    <FaMedal className="mr-3" /> Progress
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-3">
                        <div className="bg-white rounded-lg shadow-md p-8 min-h-[400px]">

                            {/* Profile Tab */}
                            {activeTab === 'profile' && (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
                                        {!isEditing && (
                                            <button onClick={() => setIsEditing(true)} className="text-primary hover:text-red-700 font-semibold flex items-center">
                                                <FaEdit className="mr-2" /> Edit Profile
                                            </button>
                                        )}
                                    </div>

                                    {updateSuccess && (
                                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                            {updateSuccess}
                                        </div>
                                    )}

                                    {isEditing ? (
                                        <form onSubmit={handleProfileUpdate} className="space-y-4 max-w-lg">
                                            <div>
                                                <label className="block text-gray-700 mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    value={editFormData.name}
                                                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 mb-2">Phone</label>
                                                <input
                                                    type="text"
                                                    value={editFormData.phone}
                                                    onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 mb-2">Age</label>
                                                <input
                                                    type="number"
                                                    value={editFormData.age}
                                                    onChange={(e) => setEditFormData({ ...editFormData, age: e.target.value })}
                                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                                />
                                            </div>
                                            <div className="flex space-x-3">
                                                <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-red-700">Save Changes</button>
                                                <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300">Cancel</button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-4 bg-gray-50 rounded-md">
                                                <span className="block text-gray-500 text-sm">Full Name</span>
                                                <span className="text-lg font-semibold">{user?.name}</span>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-md">
                                                <span className="block text-gray-500 text-sm">Email</span>
                                                <span className="text-lg font-semibold">{user?.email}</span>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-md">
                                                <span className="block text-gray-500 text-sm">Phone</span>
                                                <span className="text-lg font-semibold">{user?.phone || 'Not set'}</span>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-md">
                                                <span className="block text-gray-500 text-sm">Age</span>
                                                <span className="text-lg font-semibold">{user?.age || 'Not set'}</span>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-md">
                                                <span className="block text-gray-500 text-sm">Current Belt</span>
                                                <span className="text-lg font-semibold text-primary">{user?.beltLevel}</span>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-md">
                                                <span className="block text-gray-500 text-sm">Program</span>
                                                <span className="text-lg font-semibold">{user?.programEnrolled || 'Not enrolled'}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Attendance Tab */}
                            {activeTab === 'attendance' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Attendance Record</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                                            <div className="text-3xl font-bold text-green-600 mb-1">{user?.attendanceCount || 0}</div>
                                            <div className="text-gray-600 text-sm">Total Classes</div>
                                        </div>
                                    </div>

                                    {loading ? (
                                        <div className="flex justify-center p-8"><FaSpinner className="animate-spin" /></div>
                                    ) : attendance.length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200">
                                                        <th className="py-3 px-4 font-semibold text-gray-700">Date</th>
                                                        <th className="py-3 px-4 font-semibold text-gray-700">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {attendance.map((record) => (
                                                        <tr key={record._id} className="border-b border-gray-100 hover:bg-gray-50">
                                                            <td className="py-3 px-4">{new Date(record.date).toLocaleDateString()}</td>
                                                            <td className="py-3 px-4">
                                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                                    <FaCheck className="mr-1" /> Present
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 text-center py-8">No attendance records found.</p>
                                    )}
                                </div>
                            )}

                            {/* Progress Tab */}
                            {activeTab === 'progress' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">My Progress</h2>
                                    <div className="flex flex-col items-center justify-center py-10">
                                        <FaMedal className="text-6xl text-primary mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">Current Rank: {user?.beltLevel}</h3>
                                        <p className="text-gray-600 text-center max-w-md">
                                            Consistency is key. Keep training hard to reach the next level!
                                        </p>

                                        <div className="w-full max-w-md mt-8 bg-gray-200 rounded-full h-4">
                                            {/* logic for progress bar could be complex, using placeholder */}
                                            <div className="bg-primary h-4 rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">Estimated progress to next belt</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
