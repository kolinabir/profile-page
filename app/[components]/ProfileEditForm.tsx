"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { demoData } from "@/lib/demoData";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  gender: z.string().optional(),
  location: z.string().optional(),
  birthDate: z.string().optional(),
  bio: z.string().optional(),
  website: z.string().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  facebook: z.string().optional(),
  work: z.array(
    z.object({
      company: z.string(),
      position: z.string(),
      startDate: z.string(),
      endDate: z.string().optional(),
      description: z.string().optional(),
    })
  ),
  education: z.array(
    z.object({
      school: z.string(),
      degree: z.string(),
      fieldOfStudy: z.string(),
      startDate: z.string(),
      endDate: z.string().optional(),
      description: z.string().optional(),
    })
  ),
  skills: z.string().optional(),
});

const ProfileEditForm = () => {
  const [formData, setFormData] = useState({});
  const [editOpen, setEditOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "Shad",
      lastName: "Uddin",
      username: "@shadcn",
      email: "kn@g.com",
      gender: "Male",
      location: "Dhaka, Bangladesh",
      birthDate: "2000-01-01",
      bio: "I am a software engineer.",
      website: "https://shadcn.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      work: demoData.data.workExperiences,
      education: demoData.data.education,
      skills: "React, Node.js, TypeScript",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "education",
  });

  const {
    fields: workFields,
    append: workAppend,
    remove: workRemove,
  } = useFieldArray({
    control: form.control,
    name: "work",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values);
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  shadow p-3 rounded-md">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="Write your first name"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="Write your last name"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="Write your username"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display username.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="Write your email"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Controller
                      name="gender"
                      control={form.control}
                      render={({ field }) => (
                        <Select
                          disabled={!editOpen}
                          onValueChange={field.onChange}
                          value={field.value || ""}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="shadcn"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birth Date</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="shadcn"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="shadcn"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="shadcn"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="shadcn"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="shadcn"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="shadcn"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="shadcn"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-4  shadow p-3 rounded-md">
            <div className="my-2 p-2 ">
              <div className="font-bold text-base my-2 ">Work Experience</div>
              <div className="space-y-3">
                {workFields.map((field, index) => (
                  <div
                    key={field.company}
                    className="space-y-4 grid grid-cols-2 gap-5 shadow-md p-3 rounded-md"
                  >
                    <FormField
                      control={form.control}
                      name={`work.${index}.company`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your company"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`work.${index}.position`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your position"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`work.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your start date"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`education.${index}.endDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your end date"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`education.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Job description"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Button
                      className={editOpen ? "block" : "hidden"}
                      type="button"
                      onClick={() => workRemove(index)}
                      disabled={!editOpen}
                    >
                      Remove Work
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                className={editOpen ? "block" : "hidden"}
                type="button"
                onClick={() =>
                  workAppend({
                    company: "",
                    position: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  })
                }
                disabled={!editOpen}
              >
                Add Work
              </Button>
            </div>
            <div className="my-2 p-2 ">
              <div className="font-bold text-base my-2 ">Education</div>
              <div className="space-y-3">
                {fields.map((field, index) => (
                  <div
                    key={field.school}
                    className="space-y-4 grid grid-cols-2 gap-5 shadow-md p-3 rounded-md"
                  >
                    <FormField
                      control={form.control}
                      name={`education.${index}.school`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>School</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your school"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`education.${index}.degree`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Degree</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your degree"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`education.${index}.fieldOfStudy`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Field of Study</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your field of study"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`education.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your start date"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`education.${index}.endDate`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your end date"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`education.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Input
                              disabled={!editOpen}
                              placeholder="Write about your description"
                              className="placeholder:font-bold placeholder:text-gray-700"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button
                      className={editOpen ? "block" : "hidden"}
                      type="button"
                      onClick={() => remove(index)}
                      disabled={!editOpen}
                    >
                      Remove Education
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                className={editOpen ? "block" : "hidden"}
                type="button"
                onClick={() =>
                  append({
                    school: "",
                    degree: "",
                    fieldOfStudy: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  })
                }
                disabled={!editOpen}
              >
                Add Education
              </Button>
            </div>
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skill</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editOpen}
                      placeholder="Write about your skills"
                      className="placeholder:font-bold placeholder:text-gray-700"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {editOpen ? (
            <div className="flex gap-3">
              <Button onClick={() => setEditOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={!editOpen}>
                Submit
              </Button>
            </div>
          ) : (
            <Button onClick={() => setEditOpen(true)}>Edit</Button>
          )}
        </form>
      </Form>
      <div className="mt-8">
        <h2>Form Data:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ProfileEditForm;
