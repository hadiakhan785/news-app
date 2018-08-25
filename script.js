function initiaize(){
    $.ajax({
        url:`http://newsapi.org/v2/everything?sources=techradar&apiKey=79c794b797384c589d86219fff3b24d5`,

        success: function(data){
            

            for(let i = 0; i < data.articles.length; i++){
                document.querySelector(".news-group").innerHTML += ` <div class="card">
    
                <div class="card-body">
                    <h5 class="card-title">
                    <a href="${data.articles[i].url}" target="_blank">
                    <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="news image">
                    ${data.articles[i].title}
                    </a></h5>
                    <p class="card-text">${data.articles[i].description}</p>
                    <p class="card-text">Author: ${data.articles[i].author}</p>
                </div>
            </div>`;
            }

            // function modifyPublishedDate(index){
            //     let publishedDDate = new Date(data.articles[index].publishedAt).toLocaleString;
            //     document.querySelector(".publish-date").innerHTML = publishedDDate;
            // }
        },

        error: function(err){
            document.querySelector(".news-group").innerHTML += `Something Went Wrong`;            
        }
    });
}


{/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
