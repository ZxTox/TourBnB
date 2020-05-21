import cloudinary from "cloudinary";

export const Cloudinary = {
  upload: async (image: string) => {
    const res = cloudinary.v2.uploader.upload(image, {
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
      cloud_name: process.env.CLOUDINARY_NAME,
      folder: "TBNB_Assets/",
    });

    return await (await res).secure_url;
  },
};
