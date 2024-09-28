// // IMPORTS -
import WithEditableUser from "./with-editable-user";
import WithEditableResource from "./with-editable-resource";

// 1)
// const UserInfoForm = WithEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
//         const { name, age, hairColor } = user ?? {};

//         return user ? (
//           <>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 defaultValue={name}
//                 onChange={(e) => onChangeUser({ name: e.target.value })}
//               />
//             </label>

//             <label>
//               Age:
//               <input
//                 type="number"
//                 defaultValue={age}
//                 onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
//               />
//             </label>

//             <label>
//               Hair Color:
//               <input
//                 type="text"
//                 defaultValue={hairColor}
//                 onChange={(e) => onChangeUser({ hairColor: e.target.value })}
//               />
//             </label>
//             <button onClick={onSaveUser} type="submit">
//               Save
//             </button>
//             <button onClick={onResetUser} type="button">
//               Reset
//             </button>
//           </>
//         ) : (
//           <p>Loading ...</p>
//         );
//       }, "1");

// 2)
const UserInfoForm = WithEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user ?? {};

    return user ? (
      <>
        <label>
          Name:
          <input
            type="text"
            defaultValue={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            defaultValue={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
        </label>

        <label>
          Hair Color:
          <input
            type="text"
            defaultValue={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onSaveUser} type="submit">
          Save
        </button>
        <button onClick={onResetUser} type="button">
          Reset
        </button>
      </>
    ) : (
      <p>Loading ...</p>
    );
  },
  "http://localhost:8000/users/1",
  "user"
);

export default UserInfoForm;
