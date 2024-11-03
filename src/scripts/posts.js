window.onload = function() {
    //fetch("https://api.jsonbin.io/v3/b/671fb1f4ad19ca34f8bffe80")
    fetch("src/posts.json")
        .then((response) => response.json())
        .then(json => {
            const contentDiv = document.querySelector('.content');
            const footer = document.querySelector('.footer');
            //const posts = json.record.posts;
            const posts = json.posts;
            //console.log(posts)
            posts.forEach(post => {
                //console.log(post)
                //console.log(post["post-date"]);
                var postDiv = document.createElement('div');
                postDiv.className = "post"


                var dateDiv = document.createElement('div');
                dateDiv.className = "post-date";

                var profileSpan = document.createElement('span');
                profileSpan.className = "profile-pic";

                var profilePic = document.createElement('img');
                profilePic.className = "profile-pic";
                profilePic.setAttribute("src", post["profile-picture"])
                profilePic.setAttribute("alt", "Profile Picture")

                profileSpan.appendChild(profilePic);

                dateDiv.appendChild(profileSpan);
                dateDiv.appendChild(document.createTextNode("\t" + post['post-date']));

                postDiv.appendChild(dateDiv);

                var body = document.createElement('p');
                body.textContent = post.body;
                postDiv.appendChild(body);

                if (post.hasOwnProperty("image")){
                    var image = document.createElement('img');
                    image.setAttribute("src", post["image"]);
                    image.setAttribute("alt", post["image-alt"]);
                    postDiv.appendChild(image);
                }

        
                var likeButton = document.createElement('div');
                likeButton.className = "like-button";
                likeButton.textContent = "👍";
                postDiv.appendChild(likeButton);

                contentDiv.appendChild(postDiv);
            });
        });
    }