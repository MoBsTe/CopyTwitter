import Post from './Post';



const PostItems = ({ reversedMessages }) => {

    return (
        <div className='postlist'>
            {reversedMessages.map((m) => (
                <Post message={m} key={m.id} />
            ))}
        </div>
    );
}

export default PostItems;
