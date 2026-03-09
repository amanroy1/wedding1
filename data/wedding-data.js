/**
 * Wedding invitation data — edit this file to update events, venue, and message.
 * No need to change HTML or main JS. Order of events in the array = display order.
 */
const WEDDING_DATA = {
  // Venue / address (short, easy to mention)
  venue: {
    name: "Akira Orchards",
    line: "Yelahanka, Bengaluru, Karnataka, India"
  },

  // Common events (shared) — add, remove, or edit entries
  events: [
    {
      title: "Engagement and Sangeet Ceremony",
      date: "21.06.2026",
      time: "6 PM onwards"
    },
    {
      title: "Wedding Rituals",
      date: "22.06.2026",
      time: "9 AM Onwards"
    },
    {
      title: "Reception",
      date: "22.06.2026",
      time: "12 PM onwards"
    }
  ],

  // Groom-side events — add/remove items; list updates automatically on the site
  groomEvents: [
    { title: "Groom Event 1", date: "TBA", time: "—" },
    { title: "Groom Event 2", date: "TBA", time: "—" },
    { title: "Groom Event 3", date: "TBA", time: "—" },
  ],
  groomVenue: {
    name: "Sunder Kala Bhawan",
    line: "Ramnagar, Ara, Bihar"
  },
  // Bride-side events — add/remove items; list updates automatically on the site
  brideEvents: [
    { title: "Bride Event 1", date: "TBA", time: "—" },
    { title: "Bride Event 2", date: "TBA", time: "—" },
    { title: "Bride Event 3", date: "TBA", time: "—" }
  ],
  brideVenue: {
    name: "Aravind Skylands",
    line: "Jakkur Road, Bangalore, Karnataka"
  },
};
