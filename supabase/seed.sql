-- Run this in Supabase SQL Editor to seed initial data

-- Ensure the course exists (safe to re-run)
INSERT INTO courses (title, description, instructor, total_lessons, status)
SELECT 'The Social Media Solution',
       'The Social Media Solution is a practical, beginner-friendly course designed to teach you how to use social media strategically and professionally. Whether you want to become a social media manager, grow a business, or build a personal brand, this course provides the foundations, systems, and hands-on experience needed to succeed.',
       'Ifeoluwa Omolade',
       16,
       'available'
WHERE NOT EXISTS (SELECT 1 FROM courses WHERE title = 'The Social Media Solution');

-- Insert lessons (safe to re-run)
WITH course AS (SELECT id FROM courses WHERE title = 'The Social Media Solution' LIMIT 1)
INSERT INTO lessons (course_id, title, description, drive_link, lesson_order)
SELECT course.id, v.title, v.description, v.drive_link, v.lesson_order
FROM course
CROSS JOIN (
  VALUES
    (1, 'Introduction video', 'Course overview and what to expect.', 'https://drive.google.com/file/d/1EBo4KZQC4L45wFjaW3H7kji43Tx99cwo/view', 1),
    (2, 'What exactly does a Social Media Manager Do', 'Understanding the role and responsibilities of a social media manager.', 'https://drive.google.com/file/d/13lqM5qo9SMtEl17qPQpAZOkPcoQoJw1j/view', 2),
    (3, 'Introduction to Social Media Management', 'Foundations of social media management and industry overview.', 'https://drive.google.com/file/d/1ZZsXpQQwvFb1MLyZ9MjxZs_vnfagRsTX/view', 3),
    (4, 'Differing platforms and their Peculiarities', 'Understanding each social media platform and its unique characteristics.', 'https://drive.google.com/file/d/11dM2csoe13F04uoN5uPMe2eSrLFuB_jc/view', 4),
    (5, 'Tools to Use as a Successful Social Media Manager', 'Essential tools for managing social media effectively.', 'https://drive.google.com/file/d/1KfPmANUi4hSjS5T5rE_RbvSUz9a4BRI2/view', 5),
    (6, 'Content Creation for Social Media', 'Creating engaging content tailored for different platforms.', 'https://drive.google.com/file/d/1qMw-FAlVykZl5DlVoy-qmu5sQ0u_URMe/view', 6),
    (7, 'Content Strategy', 'Developing a content strategy that drives results.', 'https://drive.google.com/file/d/1Om_oZ-756v6C1R52awaP74JEHEogFJxX/view', 7),
    (8, 'Caption and Copywriting', 'Writing compelling captions and copy that converts.', 'https://drive.google.com/file/d/16ZM3tUOBMUfdW_oqrg5_1s-i1_2OiCFZ/view', 8),
    (9, 'Analytics and Algorithms', 'Understanding metrics, analytics, and how algorithms work.', 'https://drive.google.com/file/d/1i79gp7Zqj1xAsADhH0Gyi4CJMV3rQcLa/view', 9),
    (10, 'SEO', 'Applying SEO principles to social media content.', 'https://drive.google.com/file/d/1ksoIYAlEIBcaS9bppYTnZF2LpjKZWcfT/view', 10),
    (11, 'Engagement and community building', 'Building and engaging an online community.', 'https://drive.google.com/file/d/1Xh2gFwHq4uDzu8wJHNAefawbAVb8FTvl/view', 11),
    (12, 'Portfolio Building', 'Creating a portfolio that showcases your skills.', 'https://drive.google.com/file/d/1X5658qCwk_HbJJbfc3Q7d0SMcLYf13g2/view', 12),
    (13, 'Creating a resume', 'Crafting a professional resume for social media roles.', 'https://drive.google.com/file/d/1DsBdKKf1lUSrizcaTEpJuMceAuK47_1u/view', 13),
    (14, 'Resume building', 'Advanced resume techniques and tailoring.', 'https://drive.google.com/file/d/1yPZpDk-IjLqWNJJp3aeKI-vgFn_1rPyJ/view', 14),
    (15, 'Applying for jobs', 'Strategies for applying and landing social media jobs.', 'https://drive.google.com/file/d/1hReme-rH_nk4vZHXuEvCC97Z_z9Hkot_/view', 15),
    (16, 'Client Onboarding', 'How to onboard and manage clients professionally.', 'https://drive.google.com/file/d/1b3byaLIIHUVY07gYZVBY7L_I-YOlvd3_/view', 16)
) AS v(lesson_order, title, description, drive_link)
WHERE NOT EXISTS (
  SELECT 1 FROM lessons l WHERE l.course_id = course.id AND l.title = v.title
);

-- Update total_lessons to match actual count
UPDATE courses SET total_lessons = 16 WHERE title = 'The Social Media Solution';

-- Make Lade an admin
UPDATE profiles SET role = 'admin' WHERE id = (SELECT id FROM auth.users WHERE email = 'Ladeonajourney@gmail.com' LIMIT 1);
