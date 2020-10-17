import React from 'react';
import axios from 'axios';
import Post from './../components/posts/Post';

class Testapi extends React.Component {
    state = {
        posts: []
    }

    componentDidMount () {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then( res => {
           const posts = res.data.slice(0, 4);
           const updatedPosts = posts.map(post => {
               return {
                   ...post, 
                   author: 'Max'
               }
           })
           this.setState({
               posts : updatedPosts
           })
        }).then( err => {
        //    console.log(err)
       })
    }


    render() {
     const postss = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} author={post.author} />
     })

        return (
            <div>
            <div>hello test api</div>
             {postss}
            </div>
        )
    }
}

export default Testapi;