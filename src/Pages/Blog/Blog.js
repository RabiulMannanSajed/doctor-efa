import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className='blog-1 container mt-5'>
                {/* question number 1 */}
                <h3>1. Difference between authorization and authentication? </h3>
                <p>Authentication : কাউকে, কোনো কিছু,  কারো কোনো act(যা সঠিক বলে দাবী করা হচ্ছে)  প্রকৃতপক্ষতা সত্য কিনা নিণয় করার (giving assurance)প্রকৃিয়া
                    Authorization : কাউকে কোনো কাজ করার জন্য বা কোন resource ব্যবহার করতে পারার permission দেওয়ার প্রকৃয়া হল Authorization।

                    অর্থাৎ Authentication যখন কোন websites এ login এ valid Email ব্যবহারের মাধ্যমে  resource এ প্রবেশ করা হয়। অন্যদিকে Authorization এ আমরা
                    third party  যেমন Google,Facebook, github এগুলো ব্যবহার করে সহজে প্রবেশ করতে পারি</p>
            </div>

            <div className='blog-2 container mt-5'>
                <h3>2.Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>firebase ব্যবহার করে সহজে signup and signin তৈরি করা যায় এবং এদের resource সহজে পড়ে বুঝা যায়  আমি firebase use করার বেশ কয়েকটি কারণ
                    1.its free ( firebase is "cheap".i think it depends on how user use it  )
                    2.incredibly simple solution for a beginner  who wan to learn more
                    3.its exhaustive
                    There are some authentication way to implement
                    1.Certificate-based authentication
                    2.Biometric authentication
                    3.Token-based authentication
                </p>
                <div className='blog-3'>

                </div>

            </div>
        </div>
    );
};

export default Blog;