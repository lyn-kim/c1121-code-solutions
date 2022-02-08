import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTopicId: null
    };
    this.toggleTopic = this.toggleTopic.bind(this);
  }

  toggleTopic(id) {
    if (this.state.activeTopicId === id) {
      this.setState({ activeTopicId: null });
    } else {
      this.setState({ activeTopicId: id });
    }
  }

  render() {
    // console.log(this.props.topics);
    return (
      <div className="container">
        {this.props.topics.map(topic => {
          return (
            <React.Fragment key={topic.id}>
              <div onClick={() => this.toggleTopic(topic.id)} className="topic">
                {topic.name}
              </div>
              {this.state.activeTopicId === topic.id && (
                <div className="detail">
                  {topic.detail}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

}
