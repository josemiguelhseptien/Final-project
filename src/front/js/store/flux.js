import { element } from "prop-types";
import { findDOMNode } from "react-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      clientUser: [
        {
          id: "4",
          name: "John Doe",
          phone: "31545613584",
          email: "4@",
          password: "123",
          zip_code: "12345",
        }
      ],
      paidCalendarEntries: [],
      cancelledCalendarEntries: [],
      demo: [],
      loggedUser: [{ id: "" }],
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
          email: "1@",
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
          },
          moneyData: [
            {
              userID: 1,
              dateEntered: "",
              earned: 1,
              paid: 2,
              owed: 3,
            },
          ],
          statsData: [
            {
              userID: 1,
              dateEntered: "",
              scheduled: 3,
              completed: 2,
              canceled: 1,
            }
          ]
        },

        {
          id: "2",
          profilePicture: "https://static.wixstatic.com/media/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg/v1/fill/w_514,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg",
          name: "Second",
          password: "123",
          phone: "4896415154",
          email: "2@",
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
          },
          moneyData: [
            {
              userID: 2,
              dateEntered: "",
              earned: 1,
              paid: 2,
              owed: 3,
            },
          ],
          statsData: [
            {
              userID: 2,
              dateEntered: "",
              scheduled: 3,
              completed: 2,
              canceled: 1,
            }
          ]
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
          },
          moneyData: [
            {
              userID: 3,
              dateEntered: "",
              earned: 1,
              paid: 2,
              owed: 3,
            },
          ],
          statsData: [
            {
              userID: 3,
              dateEntered: "",
              scheduled: 3,
              completed: 2,
              canceled: 1,
            }
          ]
        }

      ],

    },
    actions: {
      // Use getActions to call a function within a fuction
      addUserIncome: (moneyEntry) => {
        const localUser = getStore().accountUser;

        localUser[0].moneyData.push({
          userID: moneyEntry.userID,
          dateEntered: moneyEntry.dateEntered,
          earned: moneyEntry.earned,
          paid: moneyEntry.paid,
          owed: moneyEntry.owed,
        });
        setStore({ accountUser: localUser });
      },

      displayTotalEarned: () => {
        const money = getStore().accountUser[0].moneyData;
        let totalEarned = 0;

        money.forEach(element => {
          totalEarned += parseInt(element.earned);
        });

        return totalEarned;
      },

      displayTotalOwed: () => {
        const money = getStore().accountUser[0].moneyData;
        let totalOwed = 0;

        money.forEach(element => {
          totalOwed += parseInt(element.owed);
        });
        return totalOwed;
      },

      displayTotalPaid: () => {
        const money = getStore().accountUser[0].moneyData;
        let totalPaid = 0;

        money.forEach(element => {
          totalPaid += parseInt(element.paid);
        });
        return totalPaid;
      },

      addUserStats: (statsEntry) => {
        const localUser = getStore().accountUser;

        localUser[0].statsData.push({
          userID: statsEntry.userID,
          dateEntered: statsEntry.dateEntered,
          earned: statsEntry.earned,
          paid: statsEntry.paid,
          owed: statsEntry.owed,
        });

        setStore({ accountUser: localUser });
      },

      displayTotalScheduled: () => {
        const stats = getStore().accountUser[0].statsData;
        let totalScheduled = 0;

        stats.forEach(element => {
          totalScheduled += parseInt(element.scheduled);
        });

        return totalScheduled;
      },

      displayTotalCompleted: () => {
        const stats = getStore().accountUser[0].statsData;
        let totalCompleted = 0;

        stats.forEach(element => {
          totalCompleted += parseInt(element.completed);
        });

        return totalCompleted;
      },

      displayTotalCanceled: () => {
        const stats = getStore().accountUser[0].statsData;
        let totalCanceled = 0;

        stats.forEach(element => {
          totalCanceled += parseInt(element.canceled);
        });

        return totalCanceled;
      },

      // Use getActions to call a function within a fuction
      addUser: (formData) => {
        const userArr = getStore().accountUser;
        let newId = getStore().accountUser.length + 1000000
        formData.id = newId.toString();
        userArr.push(formData)
        setStore({ accountUser: userArr })
        console.log(userArr)
        const store = getStore();
        let findUser = store.accountUser.find((element) => { return element.email == formData.email })
        setStore({ loggedUser: findUser });
        console.log(store.loggedUser)
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

      filterCalendarEntries: (appt, i) => {
        const store = getStore();
        let filteredArray = store.calendarEntries.filter((element, index) => {
          element[index] != appt[i]
        });
        console.log(filteredArray)
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

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) => { console.log("Error loading message from backend", error) }
          );
      },
      logout: () => {
        setStore({ loggedUser: { id: "" } });
      },

      loginClient: (loginInput) => {
        const store = getStore();
        let findUser = store.clientUser.find((element) => { return element.email == loginInput.email })
        if (loginInput.password == findUser.password) setStore({ loggedUser: findUser });

      },
      loginProfessional: (loginInput) => {
        const store = getStore();
        let findUser = store.accountUser.find((element) => { return element.email == loginInput.email })
        if (loginInput.password == findUser.password) setStore({ loggedUser: findUser });
      },
    },


  }

}

export default getState;