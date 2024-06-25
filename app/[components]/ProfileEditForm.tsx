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
import { MinusCircle, Plus, PlusCircle, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

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

  const [skills, setSkills] = useState<string[]>(demoData.data.skills || []);

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
      skills: "",
    },
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control: form.control,
    name: "education",
  });

  const {
    fields: workFields,
    append: appendWork,
    remove: removeWork,
  } = useFieldArray({
    control: form.control,
    name: "work",
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values);
    console.log(values);
  }
  const addSkill = (skill: any) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      form.setValue("skills", "");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

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
                    <Input disabled={!editOpen} type="date" {...field} />
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
          <h2 className="text-xl font-bold">Work Experience</h2>
          {workFields.map((field, index) => (
            <Card key={field.id} className="mb-4 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`work.${index}.company`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input
                          disabled={!editOpen}
                          placeholder="Company name"
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
                          placeholder="Job title"
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
                        {editOpen ? (
                          <Input disabled={!editOpen} type="date" {...field} />
                        ) : (
                          <Input disabled={!editOpen} type="text" {...field} />
                        )}
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`work.${index}.endDate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        {editOpen ? (
                          <Input disabled={!editOpen} type="date" {...field} />
                        ) : (
                          <Input disabled={!editOpen} type="text" {...field} />
                        )}
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`work.${index}.description`}
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={!editOpen}
                        placeholder="Job description and responsibilities"
                        className="h-24"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {editOpen && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="mt-4"
                  onClick={() => removeWork(index)}
                >
                  <MinusCircle className="mr-2 h-4 w-4" />
                  Remove Work Experience
                </Button>
              )}
            </Card>
          ))}
          {editOpen && (
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                appendWork({
                  company: "",
                  position: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Work Experience
            </Button>
          )}

          <h2 className="text-xl font-bold">Education</h2>

          {educationFields.map((field, index) => (
            <Card key={field.id} className="mb-4 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`education.${index}.school`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School</FormLabel>
                      <FormControl>
                        <Input
                          disabled={!editOpen}
                          placeholder="School or institution name"
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
                          placeholder="Degree obtained"
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
                          placeholder="Major or specialization"
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
                        {editOpen ? (
                          <Input disabled={!editOpen} type="date" {...field} />
                        ) : (
                          <Input disabled={!editOpen} type="text" {...field} />
                        )}
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
                        {editOpen ? (
                          <Input disabled={!editOpen} type="date" {...field} />
                        ) : (
                          <Input disabled={!editOpen} type="text" {...field} />
                        )}
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name={`education.${index}.description`}
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={!editOpen}
                        placeholder="Achievements, activities, or other relevant information"
                        className="h-24"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {editOpen && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="mt-4"
                  onClick={() => removeEducation(index)}
                >
                  <MinusCircle className="mr-2 h-4 w-4" />
                  Remove Education
                </Button>
              )}
            </Card>
          ))}
          {editOpen && (
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                appendEducation({
                  school: "",
                  degree: "",
                  fieldOfStudy: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Education
            </Button>
          )}
          <Card className="w-full mx-auto">
            <CardHeader>
              <h3 className="text-xl font-semibold">Your Skills</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-100 p-2 rounded"
                  >
                    <span>{skill}</span>
                    {editOpen && (
                      <Button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="p-1 h-auto text-gray-400 hover:text-red-500 transition-colors"
                        variant="ghost"
                      >
                        <X size={16} />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              {editOpen && (
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormControl>
                        <div className="flex">
                          <Input
                            placeholder="Enter a skill"
                            className="w-full"
                            {...field}
                          />
                          <Button
                            type="button"
                            onClick={() => addSkill(field.value as string)}
                            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white"
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
            </CardContent>
          </Card>

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
