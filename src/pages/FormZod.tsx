import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader, Send } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(6, {
      message: "Password must be longer than 6 characters!"
    })
    .max(8)
});

type FormFields = z.infer<typeof schema>;

// Without zod
// type FormFields = {
//   name: string;
//   email: string;
//   password: string;
// };

const FormZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm<FormFields>({
    defaultValues: {
      email: "a@b.c",
      name: "A"
    },
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log(data);
    setError("name", { message: "Error for name" });
    setError("root", { message: "Root error message" });
  };

  return (
    <>
      <section>
        <h1 className="text-xl font-bold">React hook form + Zod for forms</h1>
        <p className="mb-2">("@/pages/FormZod.tsx")</p>
        <ul className="list-decimal space-y-4 pl-6">
          <li>
            <h3>Install Packages</h3>
            <code>npm install react-hook-form</code>
            <code>npm i @hookform/resolvers</code>
            <code>npm install zod</code>
          </li>
          <li>
            <h3>Create zod schema for validation</h3>
            <code>
              <pre>{`import { z } from "zod";
const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(6, {
      message: "Password must be longer than 6 characters!"
    })
    .max(8)
});
type FormFields = z.infer<typeof schema>;
`}</pre>
            </code>
          </li>
          <li>
            <h3></h3>
            <code>
              <pre>{`import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//inside Component
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm<FormFields>({
    defaultValues: {
      email: "a@b.c",
      name: "A"
    },
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log(data);
    setError("name", { message: "Error for name" });
    setError("root", { message: "Root error message" });
  };
              `}</pre>
            </code>
          </li>
          <li>
            <h3>Bind submit handler to the form</h3>
            <code>
              <pre>{`<form onSubmit={handleSubmit(onSubmit)} >`}</pre>
            </code>
          </li>
          <li>
            <h3>Bind to the form inputs</h3>
            <code>
              <pre>{`<input {...register("name")} type="text" id="name" />
{errors.name ? (
  <p>{errors.name.message}</p>
) : null}`}</pre>
            </code>
          </li>
          <li>
            <h3>Using form loading state</h3>
            <code>
              <pre>{`<button type="submit">
  {isSubmitting ? "Loading" : "Submit"}
</button>`}</pre>
            </code>
          </li>
        </ul>
      </section>
      <form
        className="shadow rounded-lg mt-8 p-4 m-2 grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="name">Name :</label>
          <Input {...register("name")} type="text" id="name" />
          {errors.name ? (
            <p className="text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Input {...register("email")} type="text" id="email" />
          {errors.email ? (
            <p className="text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input {...register("password")} type="password" id="password" />
          {errors.password ? (
            <p className="text-destructive">{errors.password.message}</p>
          ) : null}
        </div>
        {errors.root ? (
          <p className="text-destructive md:col-span-2">
            {errors.root.message}
          </p>
        ) : null}
        <div className="flex md:col-span-2 justify-center">
          <Button type="submit" className="w-1/2 cursor-pointer" size="lg">
            {isSubmitting ? <Loader className="animate-spin" /> : <Send />}
            {isSubmitting ? "Loading" : "Submit"}
          </Button>
        </div>
      </form>
      <section>
        <p>
          Integrating Controlled Inputs with ui libraries -{" "}
          <a
            href="https://react-hook-form.com/get-started#IntegratingControlledInputs"
            target="_blank"
          >
            https://react-hook-form.com/get-started#IntegratingControlledInputs
          </a>
        </p>
      </section>
    </>
  );
};

export default FormZod;
