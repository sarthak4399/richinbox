import React, { useState, useEffect } from "react";
import { MdReply, MdMoreHoriz } from "react-icons/md";
import ReplyModal from "./replyModal";

const ThradeComponent = ({ email }) => {
  const [isReplyModalOpen, setReplyModalOpen] = useState(false);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [viewThread, setViewThread] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMoveDropdownOpen, setMoveDropdownOpen] = useState(false);
  const [isMoreOptionsDropdownOpen, setMoreOptionsDropdownOpen] = useState(false);
  

  const handleReplyClick = () => {
    setReplyModalOpen(true);
  };

  const closeReplyModal = () => {
    setReplyModalOpen(false);
  };

  const handleDelete = async () => {
    // Implement your delete logic here
    // For example:
    const threadId = email.threadId;
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('No auth token found');
      return;
    }

    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.ok) {
        // Handle successful delete (e.g., notify user, redirect, etc.)
        console.log('Message deleted');
      } else {
        setError('Failed to delete message');
      }
    } catch (err) {
      setError(err.message);
    }

    setConfirmationOpen(false); // Close the confirmation dialog
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false); // Close the confirmation dialog
  };

  const handleConfirmationOpen = () => {
    setConfirmationOpen(true); // Open the confirmation dialog
  };

  const handleViewThread = async () => {
    const threadId = email.threadId;
    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('No auth token found');
      return;
    }

    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.ok) {
        const result = await response.json();
        setData(result.data || []); // Ensure data is an array
      } else {
        setError('Failed to fetch thread details');
      }
    } catch (err) {
      setError(err.message);
    }

    setViewThread(!viewThread);
  };

  useEffect(() => {
    const storedIsDarkMode = localStorage.getItem("isDarkMode");
    if (storedIsDarkMode) {
      setIsDarkMode(JSON.parse(storedIsDarkMode));
    }
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'r' || event.key === 'R') {
      handleReplyClick();
    } else if (event.key === 'd' || event.key === 'D') {
      handleConfirmationOpen();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="relative flex flex-col h-full p-4 rounded-lg shadow-lg transition-all duration-300">
      {/* Email Header */}
      <div className={`flex items-center justify-between border-b pb-2 mb-4 ${isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"}`}>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{email.fromName}</span>
          <span className="text-sm">{email.fromEmail}</span>
        </div>
        <div className="text-sm flex items-center">
          <div
            className={`relative mr-2 flex items-center justify-center w-[86px] h-[32px] border rounded-md cursor-pointer ${isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
            }`}
            onClick={() => setMoveDropdownOpen(!isMoveDropdownOpen)}
          >
            Move
            {isMoveDropdownOpen && (
              <div className={`absolute right-0 top-5 mt-2 w-[200px] rounded-md shadow-lg ${isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
              }`}>
                <ul className="py-2">
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">Mark as Unread</li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">Edit Lead</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setMoreOptionsDropdownOpen(!isMoreOptionsDropdownOpen)}
              className={`flex items-center justify-center w-[32px] h-[32px] border rounded-md ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}
            >
              <MdMoreHoriz size={24} />
            </button>
            {isMoreOptionsDropdownOpen && (
              <div className={`absolute right-0 top-full mt-2 w-[200px] rounded-md shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'}`}>
                <ul className="py-2">
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-700" onClick={handleConfirmationOpen}>Delete</li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">Mark as Unread</li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">Remove Lead</li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">Set Reminder</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Email Body */}
      <div className={`flex flex-col h-80 md:h-96 mt-4 border rounded-lg overflow-auto ${isDarkMode ? 'bg-dark-bg border-gray-700' : 'bg-light-bg border-gray-300'}`}>
        <div className="flex flex-col p-4">
          <h2 className="text-xl font-semibold py-4">{email.subject}</h2>
          <span className="text-sm">{email.sentAt ? new Date(email.sentAt).toLocaleString() : "Unknown Date and Time"}</span>
        </div>
        <div className="flex flex-col text-sm p-4">
          <span><strong>From:</strong> {email.fromEmail}</span>
          <span><strong>To:</strong> {email.toEmail}</span>
        </div>
        <div className={`text-gray-800 mt-2 p-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div dangerouslySetInnerHTML={{ __html: email.body }} />
        </div>
      </div>

      {/* Button to View Thread */}
      <div
        className={`flex justify-center items-center ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-black text-white'} p-2 cursor-pointer mt-4 rounded-md hover:bg-gray-800`}
        onClick={handleViewThread}
      >
        View Thread
      </div>

      {/* Conditionally Render Email Thread */}
      {viewThread && (
        <div className={`flex flex-col h-80 md:h-96 mt-4 border rounded-lg overflow-auto ${isDarkMode ? 'bg-dark-bg border-gray-700' : 'bg-light-bg border-gray-300'}`}>
          <div className="flex flex-col p-4">
            {data.length > 0 ? (
              data.map((message) => (
                <div key={message.id} className={`mb-4 border-b last:border-b-0 pb-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold">{message.subject}</h2>
                      <span className="text-sm">{new Date(message.sentAt).toLocaleString()}</span>
                    </div>
                    <div className="flex flex-col text-sm">
                      <span><strong>From:</strong> {message.fromEmail}</span>
                      <span><strong>To:</strong> {message.toEmail}</span>
                    </div>
                    <div className={`text-gray-800 mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div dangerouslySetInnerHTML={{ __html: message.body }} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center p-4">
                No messages found.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Conditionally render ReplyModal */}
      {isReplyModalOpen && (
        <ReplyModal onClose={closeReplyModal} />
      )}

      {/* Confirmation Popup */}
      {isConfirmationOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete this email?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Delete
              </button>
              <button
                onClick={handleConfirmationClose}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThradeComponent;
