// Public content and configuration. Never put private tokens in this file.
function publicUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
export const site = {
  name: "507-AD",
  status: "In development",
  description:
    "A student-built autonomous delivery robot in development, designed to bring food from the dorm entrance to your room.",
  url: publicUrl(process.env.NEXT_PUBLIC_SITE_URL),
  meetingUrl: publicUrl(process.env.NEXT_PUBLIC_MEETING_BOOKING_URL),
  contactEmail:
    email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null,
  showPlaceholders: process.env.NEXT_PUBLIC_SHOW_ASSET_PLACEHOLDERS !== "false",
};

export const navigation = [
  { label: "The robot", href: "#robot" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Our story", href: "#our-story" },
  { label: "Join us", href: "#join" },
];

export const deliverySteps = [
  {
    title: "Drop off",
    description:
      "Your courier places the order into the robot at the dorm entrance, across the entrance barrier.",
    location: "Dorm entrance",
    state: "Entrance handoff",
    detail:
      "Courier outside. Robot inside. The last part of the delivery starts here.",
  },
  {
    title: "Head upstairs",
    description:
      "The planned robot navigates to the elevator, presses the buttons, and travels to your floor.",
    location: "Elevator → your floor",
    state: "On the way",
    detail:
      "Indoor navigation and autonomous elevator interaction are in development.",
  },
  {
    title: "Pick up at your door",
    description:
      "Follow its location, get notified, and step outside your room to collect your food.",
    location: "Your room door",
    state: "Ready to collect",
    detail:
      "The robot would wait at your door while a notification lets you know your food has arrived.",
  },
] as const;

export const robotFeatures = [
  {
    title: "Indoor navigation",
    text: "Developing navigation and obstacle avoidance for the route from the entrance to your room.",
    icon: "route",
  },
  {
    title: "Elevator interaction",
    text: "Working toward autonomous elevator operation as part of the full delivery journey.",
    icon: "elevator",
  },
  {
    title: "Location & notifications",
    text: "A planned software experience for following the robot and knowing when to collect your food.",
    icon: "notification",
  },
] as const;

export const team = [
  {
    name: "Ben Jiang",
    initials: "BJ",
    background: "Mechanical Engineering & CS",
    role: "Hardware & overall development",
    bio: "Ben works across the hardware and overall development of 507-AD, with experience at GRASP, Galbot, and Penn Electric Racing.",
    portrait: "benPortrait",
  },
  {
    name: "Timmy Ma",
    initials: "TM",
    background: "Mechanical Engineering",
    role: "Hardware development",
    bio: "Timmy leads the hardware work for 507-AD and is a member of Quakerbots.",
    portrait: "timmyPortrait",
  },
] as const;

export const faq = [
  {
    question: "Can I use 507-AD today?",
    answer:
      "507-AD is in development. We’re working toward our first MVP; service availability and a launch date have not been announced.",
  },
  {
    question: "Where would my food be delivered?",
    answer:
      "The planned destination is your room door. The robot would travel from the dorm entrance, use the elevator, and wait outside your room while you collect your order.",
  },
  {
    question: "Can the robot use elevators?",
    answer:
      "Autonomous elevator interaction is part of the experience we’re developing. We haven’t yet validated the complete delivery workflow or compatibility across elevators.",
  },
  {
    question: "Where are you planning to test?",
    answer:
      "Our first target is an entrance-to-room delivery at Lauder College House, after securing funding and building our first MVP. This is a development goal, rather than an announced service or approved pilot.",
  },
] as const;
