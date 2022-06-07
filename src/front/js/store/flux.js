import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      chartURL: "",
      clientUser: [
        {
          id: "4",
          name: "John Doe",
          phone: "31545613584",
          email: "4@",
          password: "123",
          zip_code: "12345",
        },
      ],
      clientAppointments: [{
        id: "2",
        text: `Justin Stevens`,
        startDate: new Date("2022-04-15T16:30:00.000Z"),
        endDate: new Date("2022-04-15T18:30:00.000Z"),
        allDay: true,
        description: "done",
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
      },
      {
        id: "2",
        text: `Justin Stevens`,
        startDate: new Date("2022-05-15T16:30:00.000Z"),
        endDate: new Date("2022-05-15T18:30:00.000Z"),
        allDay: true,
        description: "done",
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
      },
      {
        id: "1",
        text: `Maggie Smith`,
        startDate: new Date("2022-05-15T16:30:00.000Z"),
        endDate: new Date("2022-05-15T18:30:00.000Z"),
        allDay: true,
        description: "done",
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
      },

      ],
      paidCalendarEntries: [],
      cancelledCalendarEntries: [],
      demo: [],
      modifiedCalendarEntries: [],
      loggedUser: [
        {
          id: "1",
          profilePicture:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
          name: "Jaime",
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
              userID: "1",
              dateEntered: "",
              earned: 100,
              paid: 100,
              owed: 0,
            },
          ],
          statsData: [
            {
              userID: "1",
              dateEntered: "",
              scheduled: 1,
              completed: 1,
              canceled: 1,
            },
          ],
        }
      ],
      calendarEntries: [
        {
          id: "2",
          text: `Anna Jones`,
          startDate: new Date("2022-06-15T16:30:00.000Z"),
          endDate: new Date("2022-06-15T18:30:00.000Z"),
          allDay: true,
          description: "done",
          recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
        },
        {
          id: "2",
          text: `Anna Jones`,
          startDate: new Date("2022-05-15T16:30:00.000Z"),
          endDate: new Date("2022-05-15T18:30:00.000Z"),
          allDay: true,
          description: "done",
          recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
        },
        {
          id: "1",
          text: `Mike Peterson`,
          startDate: new Date("2022-05-15T16:30:00.000Z"),
          endDate: new Date("2022-05-15T18:30:00.000Z"),
          allDay: true,
          description: "done",
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
          profilePicture:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
          name: "Justin Stevens",
          password: "123",
          phone: "4896415154",
          email: "1@",
          background: "",
          userType: "professional",
          about: "Teacher for 5 years, K-12 grades",
          services: "Science & English tutoring",
          prices: 100,
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
              userID: "1",
              dateEntered: "",
              earned: 100,
              paid: 100,
              owed: 0,
            },
          ],
          statsData: [
            {
              userID: "1",
              dateEntered: new Date(),
              scheduled: 1,
              completed: 1,
              canceled: 1,
            },
          ],
          prospect: [
            {
              name: "Alan Jacobs",
              phone: "123-123-1234",
              email: "email@email.com",
            },
            {
              name: "Jamie Sanchez",
              phone: "123-123-1234",
              email: "email@email.com",
            },
          ],
          client: [
            {
              name: "Anna Jones",
              phone: "123-123-1234",
              email: "email@email.com",
            },
            {
              name: "Mike Peterson",
              phone: "123-123-1234",
              email: "email@email.com",
            },
          ],
        },

        {
          id: "2",
          profilePicture:
            "https://images.pexels.com/photos/5905625/pexels-photo-5905625.jpeg?cs=srgb&dl=pexels-katerina-holmes-5905625.jpg&fm=jpg",
          name: "Maggie Smith",
          password: "123",
          phone: "4896415154",
          email: "2@",
          background: "",
          userType: "professional",
          about: " Lorem ipsum dolor sit amet",
          services: "Math & Science tutoring",
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
            },
          ],
        },

        {
          id: "3",
          profilePicture:
            "https://images.pexels.com/photos/8190777/pexels-photo-8190777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "Sara Jones",
          password: "123",
          phone: "4896415154",
          email: "3@",
          background: "",
          userType: "professional",
          about: " Lorem ipsum dolor sit amet",
          services: "Music & Art tutoring",
          prices: 50,
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
            },
          ],
        },

      ],
      moneyDataSet: [
        {
          "label": "Earned",
          "data": [100, 500, 200, 300, 400, 600, 0, 100, 500]
        },
        {
          "label": "Paid",
          "data": [100, 400, 200, 200, 400, 400, 0, 100, 400]
        },
        {
          "label": "Owed",
          "data": [0, 100, 0, 100, 0, 200, 0, 0, 100]
        }
      ],
      statsDataSet: [
        {
          "label": "Scheduled",
          "data": [3, 5, 2, 4, 4, 6, 1, 1, 6]
        },
        {
          "label": "Completed",
          "data": [1, 5, 2, 3, 4, 6, 0, 1, 6]
        },
        {
          "label": "Canceled",
          "data": [2, 0, 0, 1, 0, 0, 1, 0, 0]
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

      addPaidCalendarEntry: (entry) => {
        let paidEntries = getStore().paidCalendarEntries;
        paidEntries.push(entry);
        setStore({ paidCalendarEntries: paidEntries });
      },

      displayTotalEarned: () => {
        const money = getStore().accountUser[0].moneyData;
        let totalEarned = 0;

        money.forEach((element) => {
          totalEarned += parseInt(element.earned);
        });

        return totalEarned;
      },

      displayTotalOwed: () => {
        const money = getStore().accountUser[0].moneyData;
        let totalOwed = 0;

        money.forEach((element) => {
          totalOwed += parseInt(element.owed);
        });
        return totalOwed;
      },

      displayTotalPaid: () => {
        const money = getStore().accountUser[0].moneyData;
        let totalPaid = 0;

        money.forEach((element) => {
          totalPaid += parseInt(element.paid);
        });
        return totalPaid;
      },

      editUserStats: (date, category) => {
        let newStatsData;
        let localUsers = getStore().accountUser;

        if (localUsers[0].statsData.find((elm) => elm.dateEntered == date)) {
          newStatsData = localUsers[0].statsData.map((elm, indx) => {
            if (elm.dateEntered == date) {
              elm[category] += 1;
              return elm;
            } else return elm;
          });
        } else {
          newStatsData = localUsers[0].statsData;
          let newStat = {
            userID: "1",
            dateEntered: date,
            scheduled: 0,
            completed: 0,
            canceled: 0,
          };
          newStat[category] = 1;

          newStatsData.push(newStat);
        }

        localUsers[0].statsData = newStatsData;

        setStore({ accountUser: localUsers });
      },

      displayTotalScheduled: (dates) => {
        let totalScheduled = getStore().calendarEntries;
        console.log(dates);
        let relevant = totalScheduled.filter((elm) => {
          return (
            elm.startDate.getDate() >= parseInt(dates.startDate) &&
            elm.startDate.getDate() <= parseInt(dates.endDate) &&
            elm.startDate.getMonth() + 1 >= parseInt(dates.startMonth) &&
            elm.startDate.getMonth() + 1 <= parseInt(dates.endMonth)
          );
        });

        console.log(relevant);

        return relevant;
      },

      displayTotalCompleted: () => {
        const stats = getStore().accountUser[0].statsData;
        let totalCompleted = 0;

        stats.forEach((element) => {
          totalCompleted += parseInt(element.completed);
        });

        return totalCompleted;
      },

      displayTotalCanceled: () => {
        const stats = getStore().accountUser[0].statsData;
        let totalCanceled = 0;

        stats.forEach((element) => {
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
        let filterUser = store.accountUser.filter((element) => {
          element.id != modalInfo.id;
        });
        filterUser.push(modalInfo);
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
        }),
          setStore({ calendarEntries: dataArray });
      },

      editCalendarEntry: (title, category) => {
        let dataArray = getStore().calendarEntries.map((elm, indx) => {
          if (elm.text == title) {
            elm[category] = true;
            return elm;
          } else return elm;
        });
        setStore({ calendarEntries: dataArray });
        console.log(dataArray)
      },

      modifyAppt: () => {
        const store = getStore();
        let elementId = store.calendarEntries[store.calendarEntries.length - 1]
        elementId["id"] ? null : elementId["id"] = store.loggedUser[0].id
        store.modifiedCalendarEntries.push(elementId)
      },

      filterCalendarEntries: (appt, i) => {
        const store = getStore();
        console.log(appt[i]);
        let filteredArray = store.calendarEntries.filter((element) => {
          element != appt;
          console.log(element);
        });
        console.log(filteredArray);
      },

      typeFunction: (targetValue) => {
        setStore({ serviceInput: targetValue.toLowerCase() });
        console.log(getStore().serviceInput);
        let filterTargetValue = getStore().accountUser.filter((element) => {
          return element.services.toLowerCase().includes(targetValue) || element.name.toLowerCase().includes(targetValue) || element.prices <= targetValue || element.zip_code.includes(targetValue);

        });
        console.log(filterTargetValue);
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
          .catch((error) => {
            console.log("Error loading message from backend", error);
          });
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

      displayChart: (chartName) => {
        const info = getStore()[chartName]
        console.log(info)
        fetch('https://quickchart.io/chart/create', {
          method: 'POST',
          body: JSON.stringify(
            {
              "backgroundColor": "#fff",
              "width": 500,
              "height": 300,
              "devicePixelRatio": 1.0,
              "chart": {
                "type": "bar",
                "data": {
                  "labels": ["6/1", "6/2", "6/3", "6/4", "6/5", "6/6", "6/7", "6/8", "6/9", "6/10", "6/11", "6/12", "6/13", "6/14", "6/15", "6/16", "6/17", "6/18", "6/19", "6/20", "6/21", "6/22", "6/23", "6/24", "6/25", "6/26", "6/27", "6/28", "6/29", "6/30"],
                  "datasets": info,
                }
              }
            },
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            if (response.status != 200) {
              throw new Error(response.statusText);
            }
            console.log(response)
            return response.json();
          })
          .then(response => {
            console.log('Success:', response);
            setStore({ chartURL: response.url });
          })
          .catch(error => console.error(error))

      },

    },
  };
};

export default getState;
