// 'use client'
// import { useState } from "react";
// import { Button, Card, Input, Switch, FloatingSelect, Divider } from "@rtdui/core";

// const variantOptions = ["outline", "default", "ghost"];
// const sizeOptions = ["xs", "sm", "md", "lg", "xl"];
// const radiusOptions = ["xs", "sm", "md", "lg", "xl", "circle"];

// interface LoginState {
//   username: string;
//   password: string;
//   rememberMe: boolean;
//   variant: "outline" | "default" | "ghost";
//   size: "xs" | "sm" | "md" | "lg" | "xl";
//   radius: "xs" | "sm" | "md" | "lg" | "xl" | "circle";
// }

// export default function Login() {
//   const [state, setState] = useState<LoginState>({
//     username: "",
//     password: "",
//     rememberMe: false,
//     variant: "outline",
//     size: "sm",
//     radius: "md",
//   });

//   const [isStyleMenuOpen, setIsStyleMenuOpen] = useState(false);

//   const handleInputChange = (field: keyof LoginState) => (value: string | boolean) => {
//     setState((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     // Submit form logic here
//     console.log("Form submitted", state);
//   };

//   return (
//     <div className="relative">
//       <div className="flex justify-center items-center h-screen">
//         <Card
//           shadow="md"
//           title="Login"
//           content="Please enter your username and password."
//           action={<Button color="primary" onClick={handleSubmit}>Login</Button>}
//           className="bg-base-100"
//           style={{ width: 400 }}
//         >
//           <div className="flex flex-col gap-4 p-4">
//             <Input
//               className="w-full"
//               placeholder="Username"
//               value={state.username}
//               onChange={(e) => handleInputChange("username")(e.target.value)}
//               variant={state.variant as any}
//               size={state.size as any}
//               radius={state.radius as any}
//             />
//             <Input
//               className="w-full"
//               placeholder="Password"
//               type="password"
//               value={state.password}
//               onChange={(e) => handleInputChange("password")(e.target.value)}
//               variant={state.variant as any}
//               size={state.size as any}
//               radius={state.radius as any}
//             />
//             <div className="flex items-center gap-2">
//               <Switch
//                 label="Remember Me"
//                 color="secondary"
//                 checked={state.rememberMe}
//                 onChange={(val) => handleInputChange("rememberMe")(val)}
//               />
//             </div>
//             <Divider direction="horizontal" />
//           </div>
//         </Card>
//       </div>

//       {/* Floating Button to Toggle Style Menu */}
//       <button
//         onClick={() => setIsStyleMenuOpen(!isStyleMenuOpen)}
//         className="fixed bottom-4 left-4 p-4 bg-primary text-white rounded-full shadow-lg"
//       >
//         ⚙️
//       </button>

//       {/* Floating Style Menu */}
//       {isStyleMenuOpen && (
//         <div className="fixed bottom-20 left-4 bg-white p-4 shadow-lg rounded-lg">
//           <div className="flex flex-col gap-4">
//             <div>
//               Variant:
//               <FloatingSelect
//                 data={variantOptions}
//                 value={state.variant}
//                 onChange={(val) => handleInputChange("variant")(val)}
//               />
//             </div>
//             <div>
//               Size:
//               <FloatingSelect
//                 data={sizeOptions}
//                 value={state.size}
//                 onChange={(val) => handleInputChange("size")(val)}
//               />
//             </div>
//             <div>
//               Radius:
//               <FloatingSelect
//                 data={radiusOptions}
//                 value={state.radius}
//                 onChange={(val) => handleInputChange("radius")(val)}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// Login.displayName = "LoginComponent";

