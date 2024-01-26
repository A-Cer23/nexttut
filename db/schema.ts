import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";


export var users = sqliteTable('users', {
    id: integer('id', { mode: 'number' }).primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
})

export var invoices = sqliteTable('invoices', {
    id: integer('id', { mode: 'number' }).primaryKey({autoIncrement: true}),
    customer_id: integer('customer_id', { mode: 'number'}).notNull(),
    amount: integer('amount', { mode: 'number'}).notNull(),
    status: text('status').notNull(),
    date: integer('data', { mode: 'timestamp' }).notNull(),
})

export var customers = sqliteTable('customers', {
    id: integer('id', { mode: 'number'}).primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    email: text('email').notNull(),
    image_url: text('image_url').notNull(),
})

export var revenue = sqliteTable('revenue', {
    month: text('month').notNull().unique(),
    revenue: integer('revenue', { mode: 'number'}).notNull(),
})






