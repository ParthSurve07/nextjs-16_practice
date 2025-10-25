import EventCard from "@/components/EventCard";
import { ExploreBtn } from "@/components/ExoloreBtn";
import { events } from "@/lib/constants";

export default function Home() {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br /> Event You Can&apos;t Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups and Conferences All in one place</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events list-none">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard { ...event }/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}