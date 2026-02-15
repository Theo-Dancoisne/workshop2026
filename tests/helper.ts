import { Page } from "@playwright/test";

export class TestModel {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async start() {
    await this.page.goto('http://localhost:3000/workshop2026');
    await this.page.locator('#unlock-btnNew').fill('1');
  }

  async basicRegistration() {
    await this.page.getByRole('textbox', { name: 'Blaze du groupe' }).fill('groupe test');
    await this.page.getByRole('button', { name: 'Let\'s start!' }).click();
  }

  async clickOnTrue() {
    await this.page.getByRole('button', { name: '✅ Vrai' }).click();
  }

  async clickOnFalse() {
    await this.page.getByRole('button', { name: '❌ Faux' }).click();
  }

  async clickOnNext() {
    await this.page.getByRole('button', { name: 'Question suivante →' }).click();
  }
}

