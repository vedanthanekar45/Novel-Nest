import { useState } from 'react';

function showOrHide() {
    const [password, setPassword] = useState(''); // State for the password input
    const [showPassword, setShowPassword] = useState(false); // State to toggle visibility

    // Function to toggle password visibility
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <input
                type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                placeholder="Enter your password"
            />
            <label>
                <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={handleCheckboxChange}
                />
                Show Password
            </label>
        </div>
    );
}

export default showOrHide;
