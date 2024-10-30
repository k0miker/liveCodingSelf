// Themen: 
// Async/Await
// HTTP Post - mit fetch, daten vom Frontend weg senden. 

// Die Promise Syntax kann ein bisschen tricky sein. 

// Nehmen wir an wir würden eine Instagram mäßige App bauen. 
// Wir wollen von jedem Kommentar von jedem Post die upvotes. 

/* 
    - get Current User
        - Get notifications
        - Get posts from subscribed accounts
            - Get comment for each post
                - get upvotes for each comment
*/

// fetch("http://localhost:3000/api/checkLogin")
// api = schnittstelle, wenn 2 verschiedene systeme miteinander reden wollen, machen sie es über eine API.
// fetch("/api/checkLogin").then(x => x.json())
// .then(user => {
//     if (!user) { return alert("Please log in") }
//     fetch("/api/subscriptions").then(x => x.json())
//         .then(subscriptions => {
//             subscriptions.forEach(sub => {
//                 fetch(`/api/posts/${sub.id}`).then(x => x.json())
//                     .then(posts => {
//                         posts.forEach(post => {
//                             fetch(`/api/comments/${post.id}`).then(x => x.json())
//                                 .then(comments => {
//                                     comments.forEach(comment => {
//                                         fetch(`/api/upvotes/${comment.id}`).then(x => x.json())
//                                             .then(upvotes => {
//                                                 showData(subscriptions, posts, comments, upvotes)
//                                             }).catch(handleError)
//                                     })
//                                 }).catch(handleError)
//                         })
//                     }).catch(handleError)
//             })
//         }).catch(handleError)
// }).catch(handleError)
// Callback hell, promise hell, pyramid of doom

// Es gibt eine viel einfachere Syntax damit sowas nicht passiert. 
// Diese syntax ist async/await

async function getData() {
    const result = await fetch('https://example.org/data');
    const data = await response.json();
    return data;
}

console.log(getData());