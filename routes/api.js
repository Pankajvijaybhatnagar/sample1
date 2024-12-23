const express = require("express");
const router = express.Router();

// In-memory database (array)
let items = [
  { id: 1, name: "pankaj" },
  { id: 2, name: "Ankit" },
];

// GET all items
router.get("/items", (req, res) => {
  res.json(items);
});

// GET a single item by ID
router.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// POST a new item
router.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) an item
router.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.name = req.body.name || item.name;
  res.json(item);
});

// DELETE an item
router.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).json({ message: "Item not found" });

  items.splice(itemIndex, 1);
  res.json({ message: "Item deleted" });
});

module.exports = router;
