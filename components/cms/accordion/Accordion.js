import { RichText } from 'prismic-reactjs';

const Accordion = ({ item_title, item_text }) => {
  return (
    <details
      className="column"
      open
    >
      <summary>{RichText.asText(item_title)}</summary>
      <RichText render={item_text} />
    </details>
  );
};

export default Accordion;
