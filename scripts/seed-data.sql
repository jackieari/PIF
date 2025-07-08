-- Insert sample users (students and brands)
INSERT INTO users (id, email, name, user_type, bio, location, university, major, skills) VALUES
-- Students
('550e8400-e29b-41d4-a716-446655440001', 'sarah@university.edu', 'Sarah Chen', 'student', 'Marketing student passionate about digital campaigns and social media strategy.', 'San Francisco, CA', 'UC Berkeley', 'Marketing & Communications', ARRAY['Social Media Marketing', 'Content Creation', 'Influencer Marketing', 'Analytics', 'Copywriting']),
('550e8400-e29b-41d4-a716-446655440002', 'marcus@college.edu', 'Marcus Johnson', 'student', 'Creative content creator with a focus on video marketing and brand storytelling.', 'Los Angeles, CA', 'UCLA', 'Digital Media', ARRAY['Video Production', 'Brand Storytelling', 'YouTube Marketing', 'Adobe Creative Suite']),
('550e8400-e29b-41d4-a716-446655440003', 'emma@university.edu', 'Emma Rodriguez', 'student', 'Data-driven marketer specializing in performance marketing and conversion optimization.', 'Austin, TX', 'UT Austin', 'Business Analytics', ARRAY['Performance Marketing', 'Data Analysis', 'A/B Testing', 'Google Analytics']),
('550e8400-e29b-41d4-a716-446655440004', 'alex@college.edu', 'Alex Kim', 'student', 'Social media enthusiast with expertise in TikTok and Instagram marketing.', 'Seattle, WA', 'University of Washington', 'Communications', ARRAY['TikTok Marketing', 'Instagram Growth', 'Viral Content', 'Community Management']),
('550e8400-e29b-41d4-a716-446655440005', 'jordan@university.edu', 'Jordan Taylor', 'student', 'Aspiring brand manager with experience in campaign strategy and execution.', 'Chicago, IL', 'Northwestern University', 'Marketing', ARRAY['Brand Strategy', 'Campaign Management', 'Market Research', 'Consumer Psychology']),

-- Brands
('550e8400-e29b-41d4-a716-446655440010', 'contact@techcorp.com', 'TechCorp', 'brand', 'Leading SaaS company focused on productivity tools for students and professionals.', 'San Francisco, CA', NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440011', 'marketing@ecowear.com', 'EcoWear', 'brand', 'Sustainable fashion brand creating eco-friendly clothing for conscious consumers.', 'Portland, OR', NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440012', 'team@nutrisnack.com', 'NutriSnack', 'brand', 'Health-focused snack company producing protein bars and healthy alternatives.', 'Denver, CO', NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440013', 'hello@gamegear.com', 'GameGear', 'brand', 'Gaming peripheral manufacturer specializing in high-quality headsets and accessories.', 'Austin, TX', NULL, NULL, NULL),
('550e8400-e29b-41d4-a716-446655440014', 'info@eduglobal.com', 'EduGlobal', 'brand', 'International education company offering study abroad programs for university students.', 'Boston, MA', NULL, NULL, NULL);

-- Insert sample campaigns
INSERT INTO campaigns (id, title, description, brand_id, payout, deadline, category, max_participants, requirements, tags, referral_link_base) VALUES
('650e8400-e29b-41d4-a716-446655440001', 'SaaS Product Launch', 'Help us launch our new productivity app to college students. Create engaging social content and drive sign-ups.', '550e8400-e29b-41d4-a716-446655440010', 500.00, '2024-01-15', 'Tech', 50, ARRAY['Social Media Experience', 'Content Creation', 'Student Audience'], ARRAY['SaaS', 'Productivity', 'Mobile App'], 'https://viral.app/r/saas-launch'),
('650e8400-e29b-41d4-a716-446655440002', 'Sustainable Fashion Brand', 'Promote eco-friendly clothing to Gen Z. Focus on Instagram and TikTok content creation with sustainability messaging.', '550e8400-e29b-41d4-a716-446655440011', 750.00, '2024-01-20', 'Fashion', 100, ARRAY['Fashion Interest', 'Instagram/TikTok', 'Sustainability Focus'], ARRAY['Sustainable', 'Fashion', 'Gen Z'], 'https://viral.app/r/eco-fashion'),
('650e8400-e29b-41d4-a716-446655440003', 'Healthy Snack Campaign', 'Create buzz around our new protein bars. Target fitness enthusiasts and health-conscious students.', '550e8400-e29b-41d4-a716-446655440012', 300.00, '2024-01-10', 'Food', 80, ARRAY['Fitness Interest', 'Health Content', 'Product Reviews'], ARRAY['Health', 'Fitness', 'Nutrition'], 'https://viral.app/r/protein-bars'),
('650e8400-e29b-41d4-a716-446655440004', 'Gaming Peripheral Launch', 'Showcase our new gaming headset to the gaming community. Create unboxing and review content.', '550e8400-e29b-41d4-a716-446655440013', 400.00, '2024-01-25', 'Gaming', 30, ARRAY['Gaming Content', 'Product Reviews', 'YouTube/Twitch'], ARRAY['Gaming', 'Hardware', 'Reviews'], 'https://viral.app/r/gaming-headset'),
('650e8400-e29b-41d4-a716-446655440005', 'Study Abroad Program', 'Promote our study abroad opportunities to university students. Share the benefits of international education.', '550e8400-e29b-41d4-a716-446655440014', 600.00, '2024-02-01', 'Education', 25, ARRAY['Education Focus', 'International Experience', 'Student Audience'], ARRAY['Education', 'Travel', 'University'], 'https://viral.app/r/study-abroad');

-- Insert campaign participants
INSERT INTO campaign_participants (campaign_id, user_id, referral_link) VALUES
('650e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'https://viral.app/r/saas-launch-sarah123'),
('650e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'https://viral.app/r/saas-launch-marcus456'),
('650e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', 'https://viral.app/r/eco-fashion-sarah123'),
('650e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', 'https://viral.app/r/eco-fashion-emma789'),
('650e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 'https://viral.app/r/protein-bars-alex101'),
('650e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', 'https://viral.app/r/gaming-headset-marcus456');

-- Insert user statistics
INSERT INTO user_stats (user_id, total_earned, campaigns_completed, total_clicks, total_views, total_conversions, rank, badge) VALUES
('550e8400-e29b-41d4-a716-446655440001', 3250.00, 15, 8420, 45600, 234, 1, 'Gold Creator'),
('550e8400-e29b-41d4-a716-446655440002', 2890.00, 12, 7230, 38900, 198, 2, 'Silver Creator'),
('550e8400-e29b-41d4-a716-446655440003', 2650.00, 11, 6890, 35200, 187, 3, 'Bronze Creator'),
('550e8400-e29b-41d4-a716-446655440004', 2100.00, 9, 5420, 28700, 145, 4, 'Rising Star'),
('550e8400-e29b-41d4-a716-446655440005', 1850.00, 8, 4890, 24300, 123, 5, 'Rising Star');

-- Insert campaign performance data
INSERT INTO campaign_performance (campaign_id, user_id, views, clicks, conversions, earnings) VALUES
('650e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 1250, 89, 12, 125.00),
('650e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 980, 67, 8, 95.00),
('650e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', 3200, 234, 34, 187.50),
('650e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', 2100, 156, 23, 145.00),
('650e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 890, 45, 8, 75.00),
('650e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', 1200, 78, 11, 98.00);

-- Insert sample referral clicks
INSERT INTO referral_clicks (campaign_id, user_id, referral_link, clicked_at, converted, conversion_value) VALUES
('650e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'https://viral.app/r/saas-launch-sarah123', NOW() - INTERVAL '2 days', true, 25.00),
('650e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'https://viral.app/r/saas-launch-sarah123', NOW() - INTERVAL '1 day', false, 0),
('650e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', 'https://viral.app/r/eco-fashion-sarah123', NOW() - INTERVAL '3 hours', true, 45.00),
('650e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 'https://viral.app/r/protein-bars-alex101', NOW() - INTERVAL '1 hour', false, 0);

-- Insert campaign coins (simplified token system)
INSERT INTO campaign_coins (campaign_id, coin_name, initial_supply, current_price, total_volume, trading_fees_pool) VALUES
('650e8400-e29b-41d4-a716-446655440001', 'SAAS', 1000000, 0.0015, 2500.00, 125.00),
('650e8400-e29b-41d4-a716-446655440002', 'ECO', 1000000, 0.0022, 4200.00, 210.00),
('650e8400-e29b-41d4-a716-446655440003', 'NUTRI', 1000000, 0.0008, 1800.00, 90.00),
('650e8400-e29b-41d4-a716-446655440004', 'GAME', 1000000, 0.0012, 1200.00, 60.00),
('650e8400-e29b-41d4-a716-446655440005', 'EDU', 1000000, 0.0018, 800.00, 40.00);
