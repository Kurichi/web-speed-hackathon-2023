-- SQLite
UPDATE media_file
SET filename = REPLACE(media_file.filename, ".jpg", ".avif")
WHERE media_file.filename LIKE "%.jpg";