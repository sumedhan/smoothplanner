# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190302172114) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "documents", force: :cascade do |t|
    t.string "file_name"
    t.bigint "item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_documents_on_item_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "title"
    t.datetime "time_start"
    t.datetime "time_end"
    t.string "item_type"
    t.string "details"
    t.string "confirmation"
    t.string "city_depart"
    t.string "city_arrival"
    t.string "venue"
    t.string "address"
    t.integer "phone"
    t.bigint "itinerary_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["itinerary_id"], name: "index_items_on_itinerary_id"
  end

  create_table "itineraries", force: :cascade do |t|
    t.string "name"
    t.datetime "time_start"
    t.datetime "time_end"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_itineraries_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "documents", "items"
  add_foreign_key "items", "itineraries"
  add_foreign_key "itineraries", "users"
end