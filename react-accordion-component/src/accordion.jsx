import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTopicId: null,
      topics: [
        {
          id: 1,
          name: 'Hypertext Markup Language',
          detail: 'HTML(HyperText Markup Language) is the most basic building block of the Web.It defines the meaning and structure of web content.'
        },
        {
          id: 2,
          name: 'Cascading Style Sheets',
          detail: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.'
        },
        {
          id: 3,
          name: 'JavaScript',
          detail: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.'
        }
      ]
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
    return (
      <div className="container">
        {this.state.topics.map(topic => {
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
