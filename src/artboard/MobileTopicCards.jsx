import { TOPICS } from './TopicCardHover.jsx';

const CARDS = [
  ['community', 'Bringing defence closer to the community', '#dc-title', 'topic1'],
  ['appreciating', 'Appreciating NSmen', '#an-title', 'topic2'],
  ['bonds', 'Strengthening bonds', '#sb-title', 'topic3'],
  ['privileges', 'Rewarding privileges', '#mb-title', 'topic4'],
  ['facilities', 'Enhancing SAFRA Clubs & Facilities'],
];

export function MobileTopicCards({ v }) {
  return (
    <nav className="mobile-topics" aria-label="Topics">
      {CARDS.map(([topic, title, href, action], index) => {
        const Tag = href ? 'a' : 'div';
        // The supplied mobile design uses the gift illustration for both bottom cards.
        const icon = index > 2 ? 'gift' : topic;
        return (
          <Tag key={topic} className={`tc mobile-topic ${v['lv' + (index + 1)] || ''}`}
            href={href} onClick={action ? v[action] : undefined}
            aria-label={topic === 'appreciating' ? 'Appreciating national servicemen' : title}
            aria-disabled={href ? undefined : true} tabIndex={href ? undefined : 0}
            style={{ '--i': index }}>
            <div className="mobile-topic-copy">
              <span className="mobile-topic-title">
                {topic === 'facilities' ? <>Enhancing SAFRA<br />Clubs &amp; Facilities</> : title}
              </span>
              <span className="mobile-topic-description" style={{ textWrap: ['appreciating', 'bonds', 'privileges'].includes(topic) ? 'pretty' : undefined }}>
                {topic === 'community' ? <>{TOPICS[topic].description.replace(' Total Defence.', '')}<br />Total Defence.</> : TOPICS[topic].description}
              </span>
            </div>
            <img className="mobile-topic-icon" src={`./assets/mobile-topic-${icon}.svg`} alt="" />
          </Tag>
        );
      })}
    </nav>
  );
}
