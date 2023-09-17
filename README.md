# Moodle External API

This tool can "extract" the parameters and returns of the Moodle external (web services) functions into a JSON file.

## Usage

Make sure that you have Docker installed and running.

```bash
./scripts/run.sh
```

The function definitions will be saved to `functions.json`.

## Splitting the JSON file

Make sure that you have Node.js installed, and run `pnpm install` to install the dependencies.

```bash
pnpm run split
```

The JSON file will be split into multiple files in the `functions` directory.

<details>

<summary><code>tree functions</code></summary>

```sh
functions
├── auth
│   └── email
│       ├── get_signup_settings.json
│       └── signup_user.json
├── block
│   ├── accessreview
│   │   ├── get_module_data.json
│   │   └── get_section_data.json
│   ├── recentlyaccesseditems
│   │   └── get_recent_items.json
│   └── starredcourses
│       └── get_starred_courses.json
├── core
│   ├── admin
│   │   ├── set_block_protection.json
│   │   ├── set_plugin_order.json
│   │   └── set_plugin_state.json
│   ├── auth
│   │   ├── confirm_user.json
│   │   ├── is_age_digital_consent_verification_enabled.json
│   │   ├── is_minor.json
│   │   ├── request_password_reset.json
│   │   └── resend_confirmation_email.json
│   ├── backup
│   │   ├── get_async_backup_links_backup.json
│   │   ├── get_async_backup_links_restore.json
│   │   ├── get_async_backup_progress.json
│   │   ├── get_copy_progress.json
│   │   └── submit_copy_form.json
│   ├── badges
│   │   └── get_user_badges.json
│   ├── block
│   │   ├── fetch_addable_blocks.json
│   │   ├── get_course_blocks.json
│   │   └── get_dashboard_blocks.json
│   ├── blog
│   │   ├── get_entries.json
│   │   └── view_entries.json
│   ├── calendar
│   │   ├── create_calendar_events.json
│   │   ├── delete_calendar_events.json
│   │   ├── delete_subscription.json
│   │   ├── get_action_events_by_course.json
│   │   ├── get_action_events_by_courses.json
│   │   ├── get_action_events_by_timesort.json
│   │   ├── get_allowed_event_types.json
│   │   ├── get_calendar_access_information.json
│   │   ├── get_calendar_day_view.json
│   │   ├── get_calendar_event_by_id.json
│   │   ├── get_calendar_events.json
│   │   ├── get_calendar_export_token.json
│   │   ├── get_calendar_monthly_view.json
│   │   ├── get_calendar_upcoming_view.json
│   │   ├── get_timestamps.json
│   │   ├── submit_create_update_form.json
│   │   └── update_event_start_day.json
│   ├── change
│   │   └── editmode.json
│   ├── cohort
│   │   ├── add_cohort_members.json
│   │   ├── create_cohorts.json
│   │   ├── delete_cohort_members.json
│   │   ├── delete_cohorts.json
│   │   ├── get_cohort_members.json
│   │   ├── get_cohorts.json
│   │   ├── search_cohorts.json
│   │   └── update_cohorts.json
│   ├── comment
│   │   ├── add_comments.json
│   │   ├── delete_comments.json
│   │   └── get_comments.json
│   ├── competency
│   │   ├── add_competency_to_course.json
│   │   ├── add_competency_to_plan.json
│   │   ├── add_competency_to_template.json
│   │   ├── add_related_competency.json
│   │   ├── approve_plan.json
│   │   ├── competency_framework_viewed.json
│   │   ├── competency_viewed.json
│   │   ├── complete_plan.json
│   │   ├── count_competencies.json
│   │   ├── count_competencies_in_course.json
│   │   ├── count_competencies_in_template.json
│   │   ├── count_competency_frameworks.json
│   │   ├── count_course_module_competencies.json
│   │   ├── count_courses_using_competency.json
│   │   ├── count_templates.json
│   │   ├── count_templates_using_competency.json
│   │   ├── create_competency.json
│   │   ├── create_competency_framework.json
│   │   ├── create_plan.json
│   │   ├── create_template.json
│   │   ├── create_user_evidence_competency.json
│   │   ├── delete_competency.json
│   │   ├── delete_competency_framework.json
│   │   ├── delete_evidence.json
│   │   ├── delete_plan.json
│   │   ├── delete_template.json
│   │   ├── delete_user_evidence.json
│   │   ├── delete_user_evidence_competency.json
│   │   ├── duplicate_competency_framework.json
│   │   ├── duplicate_template.json
│   │   ├── get_scale_values.json
│   │   ├── grade_competency.json
│   │   ├── grade_competency_in_course.json
│   │   ├── grade_competency_in_plan.json
│   │   ├── list_competencies.json
│   │   ├── list_competencies_in_template.json
│   │   ├── list_competency_frameworks.json
│   │   ├── list_course_competencies.json
│   │   ├── list_course_module_competencies.json
│   │   ├── list_plan_competencies.json
│   │   ├── list_templates.json
│   │   ├── list_templates_using_competency.json
│   │   ├── list_user_plans.json
│   │   ├── move_down_competency.json
│   │   ├── move_up_competency.json
│   │   ├── plan_cancel_review_request.json
│   │   ├── plan_request_review.json
│   │   ├── plan_start_review.json
│   │   ├── plan_stop_review.json
│   │   ├── read_competency.json
│   │   ├── read_competency_framework.json
│   │   ├── read_plan.json
│   │   ├── read_template.json
│   │   ├── read_user_evidence.json
│   │   ├── remove_competency_from_course.json
│   │   ├── remove_competency_from_plan.json
│   │   ├── remove_competency_from_template.json
│   │   ├── remove_related_competency.json
│   │   ├── reopen_plan.json
│   │   ├── reorder_course_competency.json
│   │   ├── reorder_plan_competency.json
│   │   ├── reorder_template_competency.json
│   │   ├── request_review_of_user_evidence_linked_competencies.json
│   │   ├── search_competencies.json
│   │   ├── set_course_competency_ruleoutcome.json
│   │   ├── set_parent_competency.json
│   │   ├── template_has_related_data.json
│   │   ├── template_viewed.json
│   │   ├── unapprove_plan.json
│   │   ├── unlink_plan_from_template.json
│   │   ├── update_competency.json
│   │   ├── update_competency_framework.json
│   │   ├── update_course_competency_settings.json
│   │   ├── update_plan.json
│   │   ├── update_template.json
│   │   ├── user_competency_cancel_review_request.json
│   │   ├── user_competency_plan_viewed.json
│   │   ├── user_competency_request_review.json
│   │   ├── user_competency_start_review.json
│   │   ├── user_competency_stop_review.json
│   │   ├── user_competency_viewed.json
│   │   ├── user_competency_viewed_in_course.json
│   │   └── user_competency_viewed_in_plan.json
│   ├── completion
│   │   ├── get_activities_completion_status.json
│   │   ├── get_course_completion_status.json
│   │   ├── mark_course_self_completed.json
│   │   ├── override_activity_completion_status.json
│   │   └── update_activity_completion_status_manually.json
│   ├── contentbank
│   │   ├── delete_content.json
│   │   ├── rename_content.json
│   │   └── set_content_visibility.json
│   ├── course
│   │   ├── add_content_item_to_user_favourites.json
│   │   ├── check_updates.json
│   │   ├── create_categories.json
│   │   ├── create_courses.json
│   │   ├── delete_categories.json
│   │   ├── delete_courses.json
│   │   ├── delete_modules.json
│   │   ├── duplicate_course.json
│   │   ├── edit_module.json
│   │   ├── edit_section.json
│   │   ├── get_activity_chooser_footer.json
│   │   ├── get_categories.json
│   │   ├── get_contents.json
│   │   ├── get_course_content_items.json
│   │   ├── get_course_module.json
│   │   ├── get_course_module_by_instance.json
│   │   ├── get_courses.json
│   │   ├── get_courses_by_field.json
│   │   ├── get_enrolled_courses_by_timeline_classification.json
│   │   ├── get_enrolled_courses_with_action_events_by_timeline_classification.json
│   │   ├── get_enrolled_users_by_cmid.json
│   │   ├── get_module.json
│   │   ├── get_recent_courses.json
│   │   ├── get_updates_since.json
│   │   ├── get_user_administration_options.json
│   │   ├── get_user_navigation_options.json
│   │   ├── import_course.json
│   │   ├── remove_content_item_from_user_favourites.json
│   │   ├── search_courses.json
│   │   ├── set_favourite_courses.json
│   │   ├── toggle_activity_recommendation.json
│   │   ├── update_categories.json
│   │   ├── update_courses.json
│   │   └── view_course.json
│   ├── courseformat
│   │   ├── file_handlers.json
│   │   ├── get_state.json
│   │   └── update_course.json
│   ├── create
│   │   └── userfeedback_action_record.json
│   ├── customfield
│   │   ├── create_category.json
│   │   ├── delete_category.json
│   │   ├── delete_field.json
│   │   ├── move_category.json
│   │   ├── move_field.json
│   │   └── reload_template.json
│   ├── dynamic
│   │   └── tabs_get_content.json
│   ├── enrol
│   │   ├── get_course_enrolment_methods.json
│   │   ├── get_enrolled_users.json
│   │   ├── get_enrolled_users_with_capability.json
│   │   ├── get_potential_users.json
│   │   ├── get_users_courses.json
│   │   ├── search_users.json
│   │   ├── submit_user_enrolment_form.json
│   │   └── unenrol_user_enrolment.json
│   ├── fetch
│   │   └── notifications.json
│   ├── files
│   │   ├── delete_draft_files.json
│   │   ├── get_files.json
│   │   ├── get_unused_draft_itemid.json
│   │   └── upload.json
│   ├── filters
│   │   └── get_available_in_context.json
│   ├── form
│   │   ├── dynamic_form.json
│   │   └── get_filetypes_browser_data.json
│   ├── get
│   │   ├── component_strings.json
│   │   ├── fragment.json
│   │   ├── string.json
│   │   ├── strings.json
│   │   └── user_dates.json
│   ├── grades
│   │   ├── create_gradecategories.json
│   │   ├── create_gradecategory.json
│   │   ├── get_enrolled_users_for_search_widget.json
│   │   ├── get_enrolled_users_for_selector.json
│   │   ├── get_feedback.json
│   │   ├── get_gradeitems.json
│   │   ├── get_groups_for_search_widget.json
│   │   ├── get_groups_for_selector.json
│   │   ├── grader_gradingpanel_point_fetch.json
│   │   ├── grader_gradingpanel_point_store.json
│   │   ├── grader_gradingpanel_scale_fetch.json
│   │   ├── grader_gradingpanel_scale_store.json
│   │   └── update_grades.json
│   ├── grading
│   │   ├── get_definitions.json
│   │   ├── get_gradingform_instances.json
│   │   └── save_definitions.json
│   ├── group
│   │   ├── add_group_members.json
│   │   ├── assign_grouping.json
│   │   ├── create_groupings.json
│   │   ├── create_groups.json
│   │   ├── delete_group_members.json
│   │   ├── delete_groupings.json
│   │   ├── delete_groups.json
│   │   ├── get_activity_allowed_groups.json
│   │   ├── get_activity_groupmode.json
│   │   ├── get_course_groupings.json
│   │   ├── get_course_groups.json
│   │   ├── get_course_user_groups.json
│   │   ├── get_group_members.json
│   │   ├── get_groupings.json
│   │   ├── get_groups.json
│   │   ├── unassign_grouping.json
│   │   ├── update_groupings.json
│   │   └── update_groups.json
│   ├── h5p
│   │   └── get_trusted_h5p_file.json
│   ├── message
│   │   ├── block_user.json
│   │   ├── confirm_contact_request.json
│   │   ├── create_contact_request.json
│   │   ├── data_for_messagearea_search_messages.json
│   │   ├── decline_contact_request.json
│   │   ├── delete_contacts.json
│   │   ├── delete_conversations_by_id.json
│   │   ├── delete_message.json
│   │   ├── delete_message_for_all_users.json
│   │   ├── get_blocked_users.json
│   │   ├── get_contact_requests.json
│   │   ├── get_conversation.json
│   │   ├── get_conversation_between_users.json
│   │   ├── get_conversation_counts.json
│   │   ├── get_conversation_members.json
│   │   ├── get_conversation_messages.json
│   │   ├── get_conversations.json
│   │   ├── get_member_info.json
│   │   ├── get_message_processor.json
│   │   ├── get_messages.json
│   │   ├── get_received_contact_requests_count.json
│   │   ├── get_self_conversation.json
│   │   ├── get_unread_conversation_counts.json
│   │   ├── get_unread_conversations_count.json
│   │   ├── get_unread_notification_count.json
│   │   ├── get_user_contacts.json
│   │   ├── get_user_message_preferences.json
│   │   ├── get_user_notification_preferences.json
│   │   ├── mark_all_conversation_messages_as_read.json
│   │   ├── mark_all_notifications_as_read.json
│   │   ├── mark_message_read.json
│   │   ├── mark_notification_read.json
│   │   ├── message_processor_config_form.json
│   │   ├── message_search_users.json
│   │   ├── mute_conversations.json
│   │   ├── search_contacts.json
│   │   ├── send_instant_messages.json
│   │   ├── send_messages_to_conversation.json
│   │   ├── set_favourite_conversations.json
│   │   ├── unblock_user.json
│   │   ├── unmute_conversations.json
│   │   └── unset_favourite_conversations.json
│   ├── moodlenet
│   │   ├── auth_check.json
│   │   ├── get_share_info_activity.json
│   │   └── send_activity.json
│   ├── notes
│   │   ├── create_notes.json
│   │   ├── delete_notes.json
│   │   ├── get_course_notes.json
│   │   ├── get_notes.json
│   │   ├── update_notes.json
│   │   └── view_notes.json
│   ├── output
│   │   ├── load_fontawesome_icon_map.json
│   │   ├── load_fontawesome_icon_system_map.json
│   │   ├── load_template.json
│   │   └── load_template_with_dependencies.json
│   ├── payment
│   │   └── get_available_gateways.json
│   ├── question
│   │   ├── get_random_question_summaries.json
│   │   ├── submit_tags_form.json
│   │   └── update_flag.json
│   ├── rating
│   │   ├── add_rating.json
│   │   └── get_item_ratings.json
│   ├── reportbuilder
│   │   ├── audiences_delete.json
│   │   ├── columns_add.json
│   │   ├── columns_delete.json
│   │   ├── columns_reorder.json
│   │   ├── columns_sort_get.json
│   │   ├── columns_sort_reorder.json
│   │   ├── columns_sort_toggle.json
│   │   ├── conditions_add.json
│   │   ├── conditions_delete.json
│   │   ├── conditions_reorder.json
│   │   ├── conditions_reset.json
│   │   ├── filters_add.json
│   │   ├── filters_delete.json
│   │   ├── filters_reorder.json
│   │   ├── filters_reset.json
│   │   ├── list_reports.json
│   │   ├── reports_delete.json
│   │   ├── reports_get.json
│   │   ├── retrieve_report.json
│   │   ├── schedules_delete.json
│   │   ├── schedules_send.json
│   │   ├── schedules_toggle.json
│   │   ├── set_filters.json
│   │   └── view_report.json
│   ├── role
│   │   ├── assign_roles.json
│   │   └── unassign_roles.json
│   ├── search
│   │   └── get_relevant_users.json
│   ├── session
│   │   ├── time_remaining.json
│   │   └── touch.json
│   ├── table
│   │   └── get_dynamic_table_content.json
│   ├── tag
│   │   ├── get_tag_areas.json
│   │   ├── get_tag_cloud.json
│   │   ├── get_tag_collections.json
│   │   ├── get_tagindex.json
│   │   ├── get_tagindex_per_area.json
│   │   ├── get_tags.json
│   │   └── update_tags.json
│   ├── update
│   │   └── inplace_editable.json
│   ├── user
│   │   ├── add_user_device.json
│   │   ├── add_user_private_files.json
│   │   ├── agree_site_policy.json
│   │   ├── create_users.json
│   │   ├── delete_users.json
│   │   ├── get_course_user_profiles.json
│   │   ├── get_private_files_info.json
│   │   ├── get_user_preferences.json
│   │   ├── get_users.json
│   │   ├── get_users_by_field.json
│   │   ├── remove_user_device.json
│   │   ├── search_identity.json
│   │   ├── set_user_preferences.json
│   │   ├── update_picture.json
│   │   ├── update_user_device_public_key.json
│   │   ├── update_user_preferences.json
│   │   ├── update_users.json
│   │   ├── view_user_list.json
│   │   └── view_user_profile.json
│   ├── webservice
│   │   └── get_site_info.json
│   └── xapi
│       ├── delete_state.json
│       ├── get_state.json
│       ├── get_states.json
│       ├── post_state.json
│       └── statement_post.json
├── enrol
│   ├── guest
│   │   └── get_instance_info.json
│   ├── manual
│   │   ├── enrol_users.json
│   │   └── unenrol_users.json
│   ├── meta
│   │   ├── add_instances.json
│   │   └── delete_instances.json
│   └── self
│       ├── enrol_user.json
│       └── get_instance_info.json
├── gradereport
│   ├── grader
│   │   └── get_users_in_report.json
│   ├── overview
│   │   ├── get_course_grades.json
│   │   └── view_grade_report.json
│   ├── singleview
│   │   └── get_grade_items_for_search_widget.json
│   └── user
│       ├── get_access_information.json
│       ├── get_grade_items.json
│       ├── get_grades_table.json
│       └── view_grade_report.json
├── gradingform
│   ├── guide
│   │   ├── grader_gradingpanel_fetch.json
│   │   └── grader_gradingpanel_store.json
│   └── rubric
│       ├── grader_gradingpanel_fetch.json
│       └── grader_gradingpanel_store.json
├── media
│   └── videojs
│       └── get_language.json
├── message
│   ├── airnotifier
│   │   ├── are_notification_preferences_configured.json
│   │   ├── enable_device.json
│   │   ├── get_user_devices.json
│   │   └── is_system_configured.json
│   └── popup
│       ├── get_popup_notifications.json
│       └── get_unread_popup_notification_count.json
├── mod
│   ├── assign
│   │   ├── copy_previous_attempt.json
│   │   ├── get_assignments.json
│   │   ├── get_grades.json
│   │   ├── get_participant.json
│   │   ├── get_submission_status.json
│   │   ├── get_submissions.json
│   │   ├── get_user_flags.json
│   │   ├── get_user_mappings.json
│   │   ├── list_participants.json
│   │   ├── lock_submissions.json
│   │   ├── reveal_identities.json
│   │   ├── revert_submissions_to_draft.json
│   │   ├── save_grade.json
│   │   ├── save_grades.json
│   │   ├── save_submission.json
│   │   ├── save_user_extensions.json
│   │   ├── set_user_flags.json
│   │   ├── start_submission.json
│   │   ├── submit_for_grading.json
│   │   ├── submit_grading_form.json
│   │   ├── unlock_submissions.json
│   │   ├── view_assign.json
│   │   ├── view_grading_table.json
│   │   └── view_submission_status.json
│   ├── bigbluebuttonbn
│   │   ├── can_join.json
│   │   ├── completion_validate.json
│   │   ├── end_meeting.json
│   │   ├── get_bigbluebuttonbns_by_courses.json
│   │   ├── get_join_url.json
│   │   ├── get_recordings.json
│   │   ├── get_recordings_to_import.json
│   │   ├── meeting_info.json
│   │   ├── update_recording.json
│   │   └── view_bigbluebuttonbn.json
│   ├── book
│   │   ├── get_books_by_courses.json
│   │   └── view_book.json
│   ├── chat
│   │   ├── get_chat_latest_messages.json
│   │   ├── get_chat_users.json
│   │   ├── get_chats_by_courses.json
│   │   ├── get_session_messages.json
│   │   ├── get_sessions.json
│   │   ├── login_user.json
│   │   ├── send_chat_message.json
│   │   └── view_chat.json
│   ├── choice
│   │   ├── delete_choice_responses.json
│   │   ├── get_choice_options.json
│   │   ├── get_choice_results.json
│   │   ├── get_choices_by_courses.json
│   │   ├── submit_choice_response.json
│   │   └── view_choice.json
│   ├── data
│   │   ├── add_entry.json
│   │   ├── approve_entry.json
│   │   ├── delete_entry.json
│   │   ├── delete_saved_preset.json
│   │   ├── get_data_access_information.json
│   │   ├── get_databases_by_courses.json
│   │   ├── get_entries.json
│   │   ├── get_entry.json
│   │   ├── get_fields.json
│   │   ├── get_mapping_information.json
│   │   ├── search_entries.json
│   │   ├── update_entry.json
│   │   └── view_database.json
│   ├── feedback
│   │   ├── get_analysis.json
│   │   ├── get_current_completed_tmp.json
│   │   ├── get_feedback_access_information.json
│   │   ├── get_feedbacks_by_courses.json
│   │   ├── get_finished_responses.json
│   │   ├── get_items.json
│   │   ├── get_last_completed.json
│   │   ├── get_non_respondents.json
│   │   ├── get_page_items.json
│   │   ├── get_responses_analysis.json
│   │   ├── get_unfinished_responses.json
│   │   ├── launch_feedback.json
│   │   ├── process_page.json
│   │   └── view_feedback.json
│   ├── folder
│   │   ├── get_folders_by_courses.json
│   │   └── view_folder.json
│   ├── forum
│   │   ├── add_discussion.json
│   │   ├── add_discussion_post.json
│   │   ├── can_add_discussion.json
│   │   ├── delete_post.json
│   │   ├── get_discussion_post.json
│   │   ├── get_discussion_posts.json
│   │   ├── get_discussion_posts_by_userid.json
│   │   ├── get_forum_access_information.json
│   │   ├── get_forum_discussions.json
│   │   ├── get_forum_discussions_paginated.json
│   │   ├── get_forums_by_courses.json
│   │   ├── prepare_draft_area_for_post.json
│   │   ├── set_lock_state.json
│   │   ├── set_pin_state.json
│   │   ├── set_subscription_state.json
│   │   ├── toggle_favourite_state.json
│   │   ├── update_discussion_post.json
│   │   ├── view_forum.json
│   │   └── view_forum_discussion.json
│   ├── glossary
│   │   ├── add_entry.json
│   │   ├── delete_entry.json
│   │   ├── get_authors.json
│   │   ├── get_categories.json
│   │   ├── get_entries_by_author.json
│   │   ├── get_entries_by_author_id.json
│   │   ├── get_entries_by_category.json
│   │   ├── get_entries_by_date.json
│   │   ├── get_entries_by_letter.json
│   │   ├── get_entries_by_search.json
│   │   ├── get_entries_by_term.json
│   │   ├── get_entries_to_approve.json
│   │   ├── get_entry_by_id.json
│   │   ├── get_glossaries_by_courses.json
│   │   ├── prepare_entry_for_edition.json
│   │   ├── update_entry.json
│   │   ├── view_entry.json
│   │   └── view_glossary.json
│   ├── h5pactivity
│   │   ├── get_attempts.json
│   │   ├── get_h5pactivities_by_courses.json
│   │   ├── get_h5pactivity_access_information.json
│   │   ├── get_results.json
│   │   ├── get_user_attempts.json
│   │   ├── log_report_viewed.json
│   │   └── view_h5pactivity.json
│   ├── imscp
│   │   ├── get_imscps_by_courses.json
│   │   └── view_imscp.json
│   ├── label
│   │   └── get_labels_by_courses.json
│   ├── lesson
│   │   ├── finish_attempt.json
│   │   ├── get_attempts_overview.json
│   │   ├── get_content_pages_viewed.json
│   │   ├── get_lesson.json
│   │   ├── get_lesson_access_information.json
│   │   ├── get_lessons_by_courses.json
│   │   ├── get_page_data.json
│   │   ├── get_pages.json
│   │   ├── get_pages_possible_jumps.json
│   │   ├── get_questions_attempts.json
│   │   ├── get_user_attempt.json
│   │   ├── get_user_attempt_grade.json
│   │   ├── get_user_grade.json
│   │   ├── get_user_timers.json
│   │   ├── launch_attempt.json
│   │   ├── process_page.json
│   │   └── view_lesson.json
│   ├── lti
│   │   ├── create_tool_proxy.json
│   │   ├── create_tool_type.json
│   │   ├── delete_tool_proxy.json
│   │   ├── delete_tool_type.json
│   │   ├── get_ltis_by_courses.json
│   │   ├── get_tool_launch_data.json
│   │   ├── get_tool_proxies.json
│   │   ├── get_tool_proxy_registration_request.json
│   │   ├── get_tool_types.json
│   │   ├── get_tool_types_and_proxies.json
│   │   ├── get_tool_types_and_proxies_count.json
│   │   ├── is_cartridge.json
│   │   ├── update_tool_type.json
│   │   └── view_lti.json
│   ├── page
│   │   ├── get_pages_by_courses.json
│   │   └── view_page.json
│   ├── quiz
│   │   ├── get_attempt_access_information.json
│   │   ├── get_attempt_data.json
│   │   ├── get_attempt_review.json
│   │   ├── get_attempt_summary.json
│   │   ├── get_combined_review_options.json
│   │   ├── get_quiz_access_information.json
│   │   ├── get_quiz_feedback_for_grade.json
│   │   ├── get_quiz_required_qtypes.json
│   │   ├── get_quizzes_by_courses.json
│   │   ├── get_reopen_attempt_confirmation.json
│   │   ├── get_user_attempts.json
│   │   ├── get_user_best_grade.json
│   │   ├── process_attempt.json
│   │   ├── reopen_attempt.json
│   │   ├── save_attempt.json
│   │   ├── set_question_version.json
│   │   ├── start_attempt.json
│   │   ├── view_attempt.json
│   │   ├── view_attempt_review.json
│   │   ├── view_attempt_summary.json
│   │   └── view_quiz.json
│   ├── resource
│   │   ├── get_resources_by_courses.json
│   │   └── view_resource.json
│   ├── scorm
│   │   ├── get_scorm_access_information.json
│   │   ├── get_scorm_attempt_count.json
│   │   ├── get_scorm_sco_tracks.json
│   │   ├── get_scorm_scoes.json
│   │   ├── get_scorm_user_data.json
│   │   ├── get_scorms_by_courses.json
│   │   ├── insert_scorm_tracks.json
│   │   ├── launch_sco.json
│   │   └── view_scorm.json
│   ├── survey
│   │   ├── get_questions.json
│   │   ├── get_surveys_by_courses.json
│   │   ├── submit_answers.json
│   │   └── view_survey.json
│   ├── url
│   │   ├── get_urls_by_courses.json
│   │   └── view_url.json
│   ├── wiki
│   │   ├── edit_page.json
│   │   ├── get_page_contents.json
│   │   ├── get_page_for_editing.json
│   │   ├── get_subwiki_files.json
│   │   ├── get_subwiki_pages.json
│   │   ├── get_subwikis.json
│   │   ├── get_wikis_by_courses.json
│   │   ├── new_page.json
│   │   ├── view_page.json
│   │   └── view_wiki.json
│   └── workshop
│       ├── add_submission.json
│       ├── delete_submission.json
│       ├── evaluate_assessment.json
│       ├── evaluate_submission.json
│       ├── get_assessment.json
│       ├── get_assessment_form_definition.json
│       ├── get_grades.json
│       ├── get_grades_report.json
│       ├── get_reviewer_assessments.json
│       ├── get_submission.json
│       ├── get_submission_assessments.json
│       ├── get_submissions.json
│       ├── get_user_plan.json
│       ├── get_workshop_access_information.json
│       ├── get_workshops_by_courses.json
│       ├── update_assessment.json
│       ├── update_submission.json
│       ├── view_submission.json
│       └── view_workshop.json
├── paygw
│   └── paypal
│       ├── create_transaction_complete.json
│       └── get_config_for_js.json
├── qbank
│   ├── columnsortorder
│   │   └── set_columnbank_order.json
│   ├── editquestion
│   │   └── set_status.json
│   └── tagquestion
│       └── submit_tags_form.json
├── quizaccess
│   └── seb
│       └── validate_quiz_keys.json
├── report
│   ├── competency
│   │   └── data_for_report.json
│   └── insights
│       ├── action_executed.json
│       ├── set_fixed_prediction.json
│       └── set_notuseful_prediction.json
├── tiny
│   ├── autosave
│   │   ├── reset_session.json
│   │   ├── resume_session.json
│   │   └── update_session.json
│   └── equation
│       └── filter.json
└── tool
    ├── analytics
    │   └── potential_contexts.json
    ├── behat
    │   └── get_entity_generator.json
    ├── dataprivacy
    │   ├── approve_data_request.json
    │   ├── bulk_approve_data_requests.json
    │   ├── bulk_deny_data_requests.json
    │   ├── cancel_data_request.json
    │   ├── confirm_contexts_for_deletion.json
    │   ├── contact_dpo.json
    │   ├── create_category_form.json
    │   ├── create_purpose_form.json
    │   ├── delete_category.json
    │   ├── delete_purpose.json
    │   ├── deny_data_request.json
    │   ├── get_activity_options.json
    │   ├── get_category_options.json
    │   ├── get_data_request.json
    │   ├── get_purpose_options.json
    │   ├── get_users.json
    │   ├── mark_complete.json
    │   ├── set_context_defaults.json
    │   ├── set_context_form.json
    │   ├── set_contextlevel_form.json
    │   └── tree_extra_branches.json
    ├── lp
    │   ├── data_for_competencies_manage_page.json
    │   ├── data_for_competency_frameworks_manage_page.json
    │   ├── data_for_competency_summary.json
    │   ├── data_for_course_competencies_page.json
    │   ├── data_for_plan_page.json
    │   ├── data_for_plans_page.json
    │   ├── data_for_related_competencies_section.json
    │   ├── data_for_template_competencies_page.json
    │   ├── data_for_templates_manage_page.json
    │   ├── data_for_user_competency_summary.json
    │   ├── data_for_user_competency_summary_in_course.json
    │   ├── data_for_user_competency_summary_in_plan.json
    │   ├── data_for_user_evidence_list_page.json
    │   ├── data_for_user_evidence_page.json
    │   ├── list_courses_using_competency.json
    │   ├── search_cohorts.json
    │   └── search_users.json
    ├── mobile
    │   ├── call_external_functions.json
    │   ├── get_autologin_key.json
    │   ├── get_config.json
    │   ├── get_content.json
    │   ├── get_plugins_supporting_mobile.json
    │   ├── get_public_config.json
    │   ├── get_tokens_for_qr_login.json
    │   └── validate_subscription_key.json
    ├── moodlenet
    │   ├── search_courses.json
    │   └── verify_webfinger.json
    ├── policy
    │   ├── get_policy_version.json
    │   └── submit_accept_on_behalf.json
    ├── templatelibrary
    │   ├── list_templates.json
    │   └── load_canonical_template.json
    ├── usertours
    │   ├── complete_tour.json
    │   ├── fetch_and_start_tour.json
    │   ├── reset_tour.json
    │   └── step_shown.json
    └── xmldb
        └── invoke_move_action.json
```

</details>

## Generating TypeScript Interfaces

The `translate:ts` script will generate TypeScript interfaces from `functions` directory.

```bash
pnpm translate:ts
```

The generated interfaces will be placed in `typescript` directory.

## Generating Rust Structs

The `translate:rs` script will generate Rust structs from `functions` directory.

```bash
pnpm translate:rs
```

The generated structs will be placed in `rust` directory.
