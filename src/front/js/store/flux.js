import { element } from "prop-types";
import { findDOMNode } from "react-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      clientUser: [
        {
          name: "John Doe",
          phone: "31545613584",
          email: "4@",
          password: "jhjk;jfajoi;",
          zip_code: "12345",
        }
      ],
      paidCalendarEntries: [],
      cancelledCalendarEntries: [],
      demo: [],
      loggedUser: [{
        id: "",
        password: "",
        email: "",
      }],
      calendarEntries: [
        {
          text: `Booking`,
          startDate: new Date("2022-04-15T16:30:00.000Z"),
          endDate: new Date("2022-04-15T18:30:00.000Z"),
          allDay: true,
          description: "Lorem ipsum fake!",
          recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
        },
      ],
      filteredUsers: [],
      serviceInput: "",
      nameInput: "",
      priceInput: "",
      zip_codeInput: "",
      accountUser: [
        {
          id: "1",
          profilePicture: "https://static.wixstatic.com/media/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg/v1/fill/w_514,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg",
          name: "FIRST",
          password: "123",
          phone: "4896415154",
          email: "123",
          background: "",
          userType: "professional",
          about: " Lorem ipsum dolor sit amet",
          services: "Math tutoring",
          prices: 30,
          zip_code: "33156",
          format: "Online only",
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
          password: "2@",
          phone: "4896415154",
          email: "321",
          background: "",
          userType: "professional",
          about: " Lorem ipsum dolor sit amet",
          services: "Math tutoring",
          prices: 50,
          zip_code: "33014",
          format: "Online only",
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
          password: "123",
          phone: "4896415154",
          email: "3@",
          background: "",
          userType: "professional",
          about: " Lorem ipsum dolor sit amet",
          services: "English tutoring",
          prices: 40,
          zip_code: "33156",
          format: "Online only",
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
      moneyData: [
        {
          userID: "",
          dateEntered: "",
          earned: 1,
          paid: 2,
          owed: 3,
        }
      ]
    },
    actions: {
      // Use getActions to call a function within a fuction
      addUser: (user, userType) => {
        if (userType == "client") {
          const clientArr = getStore().clientUser;
          clientArr.push(user)
          setStore({ clientUser: clientArr })
          setStore({ loggedUser: user })
        } else {
          const userArr = getStore().accountUser;
          userArr.push(user)
          setStore({ accountUser: userArr })
          setStore({ loggedUser: user })
        }
      },

      displayTotalScheduled: () => {
        console.log("hello")
      },
      displayTotalCompleted: () => {
        console.log("hello")
      },
      displayTotalCanceled: () => {
        console.log("hello")
      },

      editUserInfo: (modalInfo) => {
        const store = getStore();
        console.log(modalInfo)
        let filterUser = store.accountUser.filter(element => {
          return element.id != modalInfo.id
        })
        filterUser.push(filterUser)
        setStore({ accountUser: filterUser, modalInfo });
        console.log(filterUser)
      },

      logout: () => {
        setStore({
          loggedUser: {
            id: "",
            name: "",
            password: "",
            email: "",
          }
        })
      },

      addAppt: () => {
        let dataArray = getStore().calendarEntries;
        dataArray.push({
          userID: moneyEntry.userID,
          dateEntered: moneyEntry.dateEntered,
          earned: moneyEntry.earned,
          paid: moneyEntry.paid,
          owed: moneyEntry.owed,
        });

        setStore({ calendarEntries: dataArray });
      },

      addUserIncome: (moneyEntry) => {
        let dataArray = getStore().moneyData;
      },


      displayTotalEarned: () => {
        const money = getStore().moneyData;
        let totalEarned = 0;

        money.forEach(element => {
          totalEarned += parseInt(element.earned);
        });

        return totalEarned;
      },

      displayTotalOwed: () => {
        const money = getStore().moneyData;
        let totalOwed = 0;

        money.forEach(element => {
          totalOwed += parseInt(element.owed);
        });
        return totalOwed;
      },

      displayTotalPaid: () => {
        const money = getStore().moneyData;
        let totalPaid = 0;

        money.forEach(element => {
          totalPaid += parseInt(element.paid);
        });
        return totalPaid;
      },

      filterCalendarEntries: () => {
        let store = getStore();
      },
      typeFunction: (targetValue) => {
        setStore({ serviceInput: targetValue.toLowerCase() });
        console.log(getStore().serviceInput);
        let filterTargetValue = getStore().accountUser.filter((element) => {
          return element.services.toLowerCase().includes(targetValue)
        });
        console.log(filterTargetValue)
        setStore({ filteredUsers: filterTargetValue });
      },

      typeNameFunction: (targetValue) => {
        setStore({ nameInput: targetValue.toLowerCase() });
        console.log(getStore().nameInput);
        let filterTargetValue = getStore().accountUser.filter((element) => {
          return element.name.toLowerCase().includes(targetValue)
        });
        console.log(filterTargetValue)
        setStore({ filteredUsers: filterTargetValue });
      },

      typePriceFunction: (targetValue) => {
        const store = getStore();
        let number = parseInt(targetValue)
        setStore({ priceInput: number });
        console.log(targetValue.length)
        let filterTargetValue = store.accountUser.filter((element) => {
          return element.prices <= number
        });
        console.log(filterTargetValue)
        setStore({ filteredUsers: filterTargetValue });
      },


      typeZipCodeFunction: (targetValue) => {
        setStore({ zip_codeInput: targetValue });
        console.log(getStore().zip_codeInput);
        let filterTargetValue = getStore().accountUser.filter((element) => {
          return element.zip_code.includes(targetValue)
        });
        console.log(filterTargetValue)
        setStore({ filteredUsers: filterTargetValue });
      },

      clearSearch: () => {
        setStore({ zip_codeInput: "" });
        setStore({ priceInput: 0 });
        setStore({ nameInput: "" });
        setStore({ serviceInput: "" });
        setStore({ filteredUsers: [] });
      },


      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) => { console.log("Error loading message from backend", error) }
          );
      },

      loginUser: (loginInput) => {
        const store = getStore();
        let arr = [];
        if (loginInput.userType == "professional") {
          store.accountUser.filter((element) => {
            element.email != loginInput.email
            arr[0] = element
          })
        } else if (loginInput.userType == "client") {
          store.clientUser.filter((element) => {
            element.email != loginInput.email
            arr[0] = element
          })
        }
        setStore({ loggedUser: arr[0] });
        console.log(store.loggedUser.id)
      }
    },



    changeColor: (index, color) => {
      //get the store
      const store = getStore();

      //   //we have to loop the entire demo array to look for the respective index
      //   //and change its color
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //   //reset the global store
      //   setStore({ demo: demo });
    },

  }
};


export default getState;
