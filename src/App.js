import React from 'react';
import Comment from './Comment';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => (
    <div className="ui container comments">
        <ApprovalCard>
            <Comment
                author="Hendro"
                waktu="Today 06:00AM"
                content="No Comment!"
                image={faker.image.avatar()}
            />
        </ApprovalCard>
    </div>
);

export default App;