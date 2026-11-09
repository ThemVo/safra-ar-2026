// Figma 3961:108: one fixed photograph and its crop for each topic.
export const TOPICS = {
  community: {
    description: 'Families gained a deeper understanding of the importance of National Service and their role in Total Defence.',
    crop: [0, -6.77, 433.836, 245.995],
  },
  appreciating: {
    description: 'Preschools, educational institutions and businesses showed appreciation to national servicemen in meaningful ways.',
    crop: [-2.63, -29.5, 392.995, 262.028],
  },
  bonds: {
    description: 'National servicemen had more opportunities to spend quality time with their buddies and loved ones.',
    crop: [-5.75, -93.05, 404.2, 303.15],
  },
  privileges: {
    description: 'Members enjoyed exclusive benefits and greater cost savings on a wide range of offerings.',
    crop: [-0.54, -31.03, 388.542, 259.154],
  },
  facilities: {
    description: 'National servicemen and their families benefitted from new and improved facilities to keep fit, connect and unwind.',
    crop: [0, -12.21, 388, 258.698],
  },
};

export function TopicCardHover({ topic }) {
  const { description, crop: [left, top, width, height] } = TOPICS[topic];
  return (
    <>
      <span className="tc-b">{description}</span>
      <span className="tc-stk" aria-hidden="true">
        <img
          className="tc-photo"
          src={`./assets/hover-${topic}.jpg`}
          alt=""
          style={{ left: `${left / 388 * 100}%`, top: `${top / 208 * 100}%`, width: `${width / 388 * 100}%`, height: `${height / 208 * 100}%` }}
        />
      </span>
    </>
  );
}
