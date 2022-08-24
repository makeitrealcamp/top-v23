import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";


const EmojiNotFound = () => (
  <div className="emoji-not-found">
    <h2>Emojis not found</h2>
    <p>Try searching for somenthing else</p>
  </div>
)

export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const { emojiData } = this.props;
    return (
      <div className="component-emoji-results">
        {
          emojiData.length > 0 ? (
            emojiData.map(emoji => (
              <EmojiResultRow
                key={emoji.title}
                symbol={emoji.symbol}
                title={emoji.title}
              />
            ))
          ) : <EmojiNotFound />
        }
      </div>
    );
  }
}
