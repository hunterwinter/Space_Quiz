import * as React from 'react';
import * as ReactDOM from 'react-dom';

const posts = [
        {title: "Awsome Post 1", replies:[
        {text: "works"}
        ]},
        {title: "Awsome Post 2", 
        replies:[
        {text: "2nd post reply"}
        ]},
        {title: "Awsome Post 3", 
        replies:[
        {text: "3rd Reply here"}
        ]}
    ]

require('../src/main.scss');


class ReplyBox extends React.Component{
    
    constructor(props){
        super(props);

        //identifiy the state of the button
        this.state = {
            text: '',
            photoAdded: false
        }

    }

    _handleChange(event){
        //check state
        this.setState({ text:event.target.value });
    }

    //toggles the state of the Add Photo buton
    _togglePhoto(){
        this.setState({photoAdded: !this.state.photoAdded});
    }

    //calculates the remaining letter count with the image
    _remainingChars(){
        if(this.state.photoAdded){
            return 140 - 27 - this.state.text.length;
        }else{
            return 140 - this.state.text.length;
        }
    }

    _overflowAlert(){

        //Ternary Operator in a variable
        const overFlowText = this.state.photoAdded ?
            this.state.text.substring((140-27), this.state.text.length):
            this.state.text.substring(140, this.state.text.length)

        if(this._remainingChars() < 0){
            return(
                <div className="alert alert-warning">
                    <strong>Oops too long: ...{overFlowText}</strong>
                </div>
            )
            }else{
                return '';
        }
    }



    render(){
        //outputs html from react
        return(
            <div className="well clearfix">
                {this._overflowAlert()}
                <h3>Replying to : {this.props.post.title}</h3>
                <textarea 
                    onChange={this._handleChange.bind(this)} 
                    className="form-control">
                </textarea>
                <br/>
                <span>
                    { this._remainingChars() }
                </span>
                <button 
                    className="btn btn-primary pull-right" 
                    disabled={ this._remainingChars() < 0 || this._remainingChars() === 140}>
                    Post Reply
                </button>
                <button 
                    onClick={this._togglePhoto.bind(this)}
                    className="btn btn-default pull-right">
                    { !this.state.photoAdded ? 'Add Photo' : 'Photo Added'}
                </button>
            </div>
        )
    }
}

class App extends React.Component{

    _renderReplies(post){
        return( 
                <div>
                    <h3>Replies:</h3>
                    { post.replies.map((reply,index)=>{
                            return(
                                <p key={index}>
                                    {reply.text}
                                </p>
                            )
                    })}
                </div>
            )
    }


    render(){
        return(    <div>
                <h1>Posts Replies</h1>
                {posts.map((post, index)=>{
                    return(
                        <div key={index}>
                            <h2>Post Title: {post.title}</h2>
                            { post.replies.length ? this._renderReplies(post) : ''}
                            <ReplyBox post={post}/>
                        </div>
                        )
                }) }
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));