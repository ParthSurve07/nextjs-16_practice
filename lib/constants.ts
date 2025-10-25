export type Event = {
  title: string;
  image: string; // path under /public/images, e.g. "/images/event1.png"
  slug: string;
  location: string;
  date: string; // human-friendly date or range
  time: string; // local start time
};

// Popular and upcoming dev events (as of late 2025). Images must exist under public/images.
export const events: Event[] = [
  {
    title: "AWS re:Invent 2025",
    image: "/images/event1.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "Dec 1–5, 2025",
    time: "9:00 AM PST",
  },
  {
    title: "GitHub Universe 2025",
    image: "/images/event2.png",
    slug: "github-universe-2025",
    location: "San Francisco, CA, USA",
    date: "Nov 12–13, 2025",
    time: "10:00 AM PST",
  },
  {
    title: "Next.js Conf 2025",
    image: "/images/event3.png",
    slug: "nextjs-conf-2025",
    location: "Online",
    date: "Oct 29, 2025",
    time: "9:00 AM PT",
  },
  {
    title: "KubeCon + CloudNativeCon North America 2025",
    image: "/images/event4.png",
    slug: "kubecon-na-2025",
    location: "Austin, TX, USA",
    date: "Nov 18–21, 2025",
    time: "9:00 AM CT",
  },
  {
    title: "Google I/O 2026",
    image: "/images/event5.png",
    slug: "google-io-2026",
    location: "Mountain View, CA, USA + Online",
    date: "May 12–14, 2026",
    time: "9:30 AM PT",
  },
  {
    title: "Microsoft Build 2026",
    image: "/images/event6.png",
    slug: "microsoft-build-2026",
    location: "Seattle, WA, USA + Online",
    date: "May 20–22, 2026",
    time: "9:00 AM PT",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event-full.png",
    slug: "pycon-us-2026",
    location: "Pittsburgh, PA, USA",
    date: "May 13–21, 2026",
    time: "9:00 AM ET",
  },
];
