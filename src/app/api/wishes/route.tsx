import { NextResponse } from "next/server";
import Wish from "../../../components/models/Wish"
import connectDB from "@/config/database";


export async function GET(){
  await connectDB();


  try {
    const wishes = await Wish.find({});  
    return NextResponse.json(wishes);
  } catch (err: any) {
    return NextResponse.json({error: err.message})
  }
  

}


// module.exports = {
//     getProfile: async (req: NextRequest, res: NextResponse) => {
//         try {
//           const posts = await Post.find({ user: req.user.id });
//           res.render("profile.ejs", { posts: posts, user: req.user });
//         } catch (err) {
//           console.log(err);
//         }
//       },
//     createPost: async (req: NextRequest, res: NextResponse) => {
//         try {

//           console.log(req);
          
//           // Upload image to cloudinary
//           const result = await cloudinary.uploader.upload(req.file.path);
    
//           await Wish.create({
//             title: req.body.title,
//             img: result.secure_url,
//             cloudinaryId: result.public_id,
//             caption: req.body.caption,
//             user: req.user.id,
//           });
//           console.log("Post has been added!");
//           res.redirect("/profile");
//         } catch (err) {
//           console.log(err);
//         }
//       },
// }