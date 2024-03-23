import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new error("Cabine could not be loaded");
  }
  return data;
}

export async function createEditCabine(newCabine, id) {
  const hasImagePath = newCabine.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabine.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabine.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //create/edit cabi
  let query = supabase.from("cabins");

  //create cabin
  if (!id) query = query.insert([{ ...newCabine, image: imagePath }]);
  // const { data, error } = await query.select().single();

  //edit cabin
  if (id) query = query.update({ ...newCabine, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new error("Cabine could not be created");
  }

  if (hasImagePath) return data;
  //upload image

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabine.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    if (error) {
      throw new error("Cabine image could not be uploaded");
    }
  }

  return data;
}

export async function deleteCabine(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new error("Cabine could not be deleted");
  }
  return data;
}
