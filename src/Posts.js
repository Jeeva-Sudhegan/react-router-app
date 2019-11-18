import React, { Component, useState } from "react";
import Axios from 'axios';
import { Input, Button, TextArea } from "../HTMLElements/HTMLElements";
import "../style/posts.css";
import "../style/Content.css";
import PropTypes from 'prop-types';

const Post = props => {
    const [show, setShow] = useState(false);
    const { post, onClick, visibleIndex, onDelete } = props;
    const handleShow = id => {
        setShow(!show);
        onClick(id);
    }
    return (
        <div className="post">
            <div className="title" onClick={() => handleShow(post.id)}>
                {post.title}
                <div className="close" onClick={() => { onDelete(post.id) }}> &times; </div>
            </div>
            {post.id === visibleIndex && show && <div className="body"> {post.body} </div>}
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.object,
    onClick: PropTypes.func,
    visibleIndex: PropTypes.number,
    onDelete: PropTypes.func
}


class Posts extends Component {

    state = {
        posts: [],
        visibleIndex: 1
    }
    
    
    async componentDidMount() {
        const { posts } = this.props;
        if (posts.length > 0) {
            this.setState({ posts });
        } else {
            const response = await Axios.get("https://jsonplaceholder.typicode.com/posts");
            const posts = await response.data;
            this.setState({ posts }, () => {
                this.props.handleChange(posts);
            });
        }
    }



    // shouldComponentUpdate(nextState) {
    //     return 
    // }

    handleDelete = id => {
        let { posts } = this.state;
        posts = posts.filter(post => post.id !== id);
        this.setState({ posts }, () => {
            this.props.handleChange(posts);
        });
    }

    handleVisible = id => {
        this.setState({ visibleIndex: id });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick = event => {
        event.preventDefault();
        const { title, body } = this.state;
        const post = { title, body, userId: "12" };
        Axios.post("https://jsonplaceholder.typicode.com/posts", { post })
            .then(res => {
                let { post, id } = res.data;
                post = { ...post, id };
                const posts = [...this.state.posts, post];
                this.setState({ posts }, () => {
                    this.props.handleChange(posts);
                });
            });
        document.getElementsByName("title")[0].value = "";
        document.getElementsByName("body")[0].value = "";
    }

    render() {
        const posts = this.state.posts.map(post => (
            <Post
                key={post.id}
                post={post}
                visibleIndex={this.state.visibleIndex}
                onClick={this.handleVisible}
                onDelete={this.handleDelete} />
        ));
        return (
            <div className="content">
                <div className="form">
                    <Input name="title" type="text" onChange={this.handleChange} />
                    <TextArea name="body" row="3" column="10" onChange={this.handleChange} />
                    <Button onClick={this.handleClick}>
                        Share
                    </Button>
                </div>
                {posts}
            </div>
        );
    }
}

Posts.propTypes = {
    handleChange: PropTypes.func,
    posts: PropTypes.array
}

export default Posts;