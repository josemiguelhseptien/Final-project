import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      calendarEntries: [],
      demo: [],
      user: "username",
      calendarEntries: [
        {
          text: `Booking`,
          startDate: new Date("2022-04-15T16:30:00.000Z"),
          endDate: new Date("2022-04-15T18:30:00.000Z"),
          allDay: true,
          recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
        },
      ],
      accountUser: [
        {
          id: "1",
          profilePicture: "https://static.wixstatic.com/media/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg/v1/fill/w_514,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg",
          name: "FIRST",
          phone: "4896415154",
          email: "asdasas@fcac",
          background: "",
          userType: "professional",
          about: " Lorem ipsum dolor sit amet",
          services: ["Math tutoring"],
          prices: ["50"],
          availability: {
            Monday: "",
            Tuesday: "",
            Wednesday: "",
            Thursday: "",
            Friday: "",
            Saturday: "",
            Sunday: "",
          }
        },

        {
          id: "2",
          profilePicture: "https://static.wixstatic.com/media/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg/v1/fill/w_514,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg",
          name: "Second",
          phone: "4896415154",
          email: "asdasas@fcac",
          background: "",
          userType: "professional",
          about: " Lorem ipsum dolor sit amet",
          services: ["Math tutoring"],
          prices: ["50"],
          availability: {
            Monday: "",
            Tuesday: "",
            Wednesday: "",
            Thursday: "",
            Friday: "",
            Saturday: "",
            Sunday: "",
          }
        },

        {
          id: "3",
          profilePicture: "https://static.wixstatic.com/media/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg/v1/fill/w_514,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg",
          name: "Third",
          phone: "4896415154",
          email: "asdasas@fcac",
          background: "",
          userType: "professional",
          about: " Lorem ipsum dolor sit amet",
          services: ["English tutoring"],
          prices: ["50"],
          availability: {
            Monday: "",
            Tuesday: "",
            Wednesday: "",
            Thursday: "",
            Friday: "",
            Saturday: "",
            Sunday: "",
          }
        }

      ],

    },
    actions: {
      // Use getActions to call a function within a fuction
      addUser: (formData) => {
        const userArr = getStore().accountUser;
        userArr.push(formData)
        setStore({ accountUser: userArr })
      },

      editUserInfo: (modalInfo) => {
        const store = getStore();
        let filterUser = store.accountUser.filter(element => {
          element.id != modalInfo.id
        })
        filterUser.push(modalInfo)
        setStore({ accountUser: filterUser, modalInfo });
      },

      addAppt: () => {
        let dataArray = getStore().calendarEntries;

        dataArray.push({
          text: `Booking`,
          startDate: new Date("2022-04-15T16:30:00.000Z"),
          endDate: new Date("2022-04-15T18:30:00.000Z"),
          allDay: false,
          recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
        });

        setStore({ calendarEntries: dataArray });
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },



      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });



        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
