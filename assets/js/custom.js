	const BloggerID = '3398820824447738378'
const ApiKey = 'AIzaSyBlhiVusbZvjMdxJq5KkqrJ_80AZHClSX4'
const GoogleBlogger = 'https://www.googleapis.com/blogger/v3/blogs/blogId';
const GoogleBloggerV3 = 'https://www.googleapis.com/blogger/v3/blogs/2399953';


// GetPost
async function googleBlogger() {
  const rsp = await fetch( GoogleBloggerV3 + '?key=' + ApiKey ),
        data = await rsp.json();
  return data.posts.selfLink;
}

async function fetchJson()
{
  try {
    let result = await googleBlogger();
    console.log(result)
  } catch( err ) {
    console.error( err );
  }
}

fetchJson();
