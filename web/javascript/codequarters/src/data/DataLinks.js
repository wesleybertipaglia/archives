import BaseUrl from "/config/env.js"

const DataLinks = {
    home: { name: 'Home', url: `${BaseUrl}` },
    nav: 
    [
      { name: 'About', url: `${BaseUrl}/pages/about.html` },
      { name: 'Contact', url: `${BaseUrl}/pages/contact.html` },
      { name: 'Projects', url: `${BaseUrl}/pages/projects.html` },
      { name: 'Blog', url: `${BaseUrl}/blog` },
    ],        
}
export default DataLinks