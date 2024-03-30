"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordRestToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas";
import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const ValidatedFields = ResetSchema.safeParse(values);

  if (!ValidatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = ValidatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  const passwordResetToken = await generatePasswordRestToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset email sent!" };
};
