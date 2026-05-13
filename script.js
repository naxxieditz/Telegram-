// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Fetch Channels from Firebase
const channelContainer = document.getElementById('channel-container');

database.ref('channels').on('value', (snapshot) => {
    channelContainer.innerHTML = ""; // Clear existing
    const data = snapshot.val();
    
    for (let id in data) {
        const channel = data[id];
        const card = `
            <div class="channel-card">
                <img src="${channel.image || 'https://via.placeholder.com/80'}" alt="Logo">
                <h3>${channel.name}</h3>
                <p>${channel.description}</p>
                <a href="${channel.link}" target="_blank" class="join-btn">Join Channel</a>
            </div>
        `;
        channelContainer.innerHTML += card;
    }
});
