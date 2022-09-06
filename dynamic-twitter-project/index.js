var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var users = { user1, user2}
const urlParams = new URLSearchParams(location.search);

var user = users[urlParams.get("user")];

var pageContent = 
`
    <div id="header-section" class="section">
    <button>&lt-</button>
    <div class="header-text-content">
        <div id="header-display-name">
            <h2>${user.displayName} <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/768px-Twitter_Verified_Badge.svg.png" width="25px"></h2>
        </div>
        <h6 id="tweet-count">${user.tweets.length} Tweets</h6>
    </div> 
    </div>
    <div id="cover-photo-section" class="section" style="background-image: url('${user.coverPhotoURL}')">
        
    </div>
    <div id="profile-details-section" class="section">
        <div id="profile-info">
            <div id="profile-image-area">
                <img src="${user.avatarURL}" id="profile-picture">
            </div>
            <div>
                <h2>${user.displayName} <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/768px-Twitter_Verified_Badge.svg.png" width="25px"></h2>
                <h6 id="username-display">${user.userName}</h6>
            </div>
            <h6 id="join-date">Joined ${user.joinedDate}</h6>
            <div id="following-followers">
                <div>
                    <h6 id="following-count"><span class="bold">${user.followingCount}</span> Following</h6>
                </div>
                <div>
                    <h6 id="follower-count"><span class="bold">${user.followerCount}</span> Followers</h6>
                </div>
            </div>
        </div>
        <div>
            <button id="follow-button">Follow<button>
        </div>
    </div>
    <div id="navigation-tabs" class="section">
        <button class="navigation-button">Tweets</button>
        <button class="navigation-button">Tweets &amp replies</button>
        <button class="navigation-button">Media</button>
        <button class="navigation-button">Likes</button>
    </div>
    <div id="tweets-section" class="section">
        
    </div>
`;

$("body").append(pageContent);

for(var tweet of user.tweets)
{
    var tweetBlock = 
    `
        <div class="tweet">
            <img src="${user.avatarURL}" class="tweet-profile-picture">
            <div>
                <div class="tweet-header"> 
                    <h3>${user.displayName}</h3> 
                    <h6>${user.userName}</h6> 
                    <h6>${tweet.timestamp}</h6> 
                </div>
                <p>${tweet.text}</p>
            </div>
        </div>
    `;
    $("#tweets-section").append(tweetBlock);
}

$("#follow-button").click(function() {
    if($("#follow-button").hasClass(".following-user"))
        $("#follow-button").removeClass(".following-user").text("Follow");
    else
        $("#follow-button").addClass(".following-user").text("Following"); 
});
