import "./Content.css"
import PropTypes from "prop-types";

function Content(props) {
    const { count } = props;
    const paragraphs = [];
    for (let i = 0; i < count; i++) {
        paragraphs.push(<p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae tempora commodi vel unde facere itaque provident atque molestias minima odit iusto repudiandae voluptate at magni, et quia quis distinctio!</p>);
    }

    return ( <div id="content" className="first-content">
        {paragraphs}
    </div> );
}

Content.propTypes = {
    count: PropTypes.number
}

Content.defaultProps = {
    count: 5
}

export default Content;