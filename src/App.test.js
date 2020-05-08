import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});


test('form can be filled and submitted', () => {

  const { getByTestId } = render(<ContactForm />);


  const firstNameInput = getByTestId(/first-name/i);
  const lastNameInput = getByTestId(/last-name/i);
  const emailInput = getByTestId(/email/i);
  const messageInput = getByTestId(/message/i);

  const submitButton = getByTestId(/submit-button/i);

  expect(firstNameInput).toBeVisible();
  expect(lastNameInput).toBeVisible();
  expect(emailInput).toBeVisible();
  expect(messageInput).toBeVisible();
  expect(submitButton).toBeVisible();


})

test('change input values', () => {


  const { getByTestId } = render(<ContactForm />);

  const firstNameInput = getByTestId(/first-name/i);
  const lastNameInput = getByTestId(/last-name/i);
  const emailInput = getByTestId(/email/i);
  const messageInput = getByTestId(/message/i);

  const submitButton = getByTestId(/submit-button/i);
  fireEvent.change(firstNameInput, { target: { value: 'Guillermo' } })
  fireEvent.change(lastNameInput, { target: { value: 'Alfaro' } })
  fireEvent.change(emailInput, { target: { value: 'galfarotolon@gmail.com' } })
  fireEvent.change(messageInput, { target: { value: 'generic message example' } })

  // fireEvent.click(submitButton);

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();


})
