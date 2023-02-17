var sourcesIndex = JSON.parse('{\
"matrix_sdk":["",[["client",[],["builder.rs","login_builder.rs","mod.rs"]],["config",[],["mod.rs","request.rs","sync.rs"]],["encryption",[["identities",[],["devices.rs","mod.rs","users.rs"]],["verification",[],["mod.rs","qrcode.rs","requests.rs","sas.rs"]]],["mod.rs"]],["event_handler",[],["context.rs","maps.rs","mod.rs","static_events.rs"]],["room",[],["common.rs","invited.rs","joined.rs","left.rs","member.rs","mod.rs"]]],["account.rs","attachment.rs","error.rs","http_client.rs","lib.rs","media.rs","sync.rs"]],\
"matrix_sdk_appservice":["",[],["error.rs","event_handler.rs","lib.rs","registration.rs","user.rs","webserver.rs"]],\
"matrix_sdk_base":["",[["rooms",[],["members.rs","mod.rs","normal.rs"]],["store",[],["ambiguity_map.rs","memory_store.rs","mod.rs"]]],["client.rs","deserialized_responses.rs","error.rs","lib.rs","media.rs","session.rs","sync.rs","utils.rs"]],\
"matrix_sdk_common":["",[],["deserialized_responses.rs","executor.rs","lib.rs","locks.rs","timeout.rs"]],\
"matrix_sdk_crypto":["",[["file_encryption",[],["attachments.rs","key_export.rs","mod.rs"]],["gossiping",[],["machine.rs","mod.rs"]],["identities",[],["device.rs","manager.rs","mod.rs","user.rs"]],["olm",[["group_sessions",[],["inbound.rs","mod.rs","outbound.rs"]],["signing",[],["mod.rs","pk_signing.rs"]]],["account.rs","mod.rs","session.rs","utility.rs"]],["session_manager",[],["group_sessions.rs","mod.rs","sessions.rs"]],["store",[],["caches.rs","error.rs","memorystore.rs","mod.rs","traits.rs"]],["types",[["cross_signing",[],["common.rs","master.rs","mod.rs","self_signing.rs","user_signing.rs"]],["events",[["room",[],["encrypted.rs","mod.rs"]]],["forwarded_room_key.rs","mod.rs","olm_v1.rs","room_key.rs","room_key_request.rs","secret_send.rs","to_device.rs"]]],["backup.rs","device_keys.rs","mod.rs","one_time_keys.rs"]],["verification",[["sas",[],["helpers.rs","inner_sas.rs","mod.rs","sas_state.rs"]]],["cache.rs","event_enums.rs","machine.rs","mod.rs","qrcode.rs","requests.rs"]]],["error.rs","lib.rs","machine.rs","requests.rs","utilities.rs"]],\
"matrix_sdk_indexeddb":["",[],["crypto_store.rs","lib.rs","safe_encode.rs","state_store.rs"]],\
"matrix_sdk_qrcode":["",[],["error.rs","lib.rs","types.rs","utils.rs"]],\
"matrix_sdk_sled":["",[],["crypto_store.rs","encode_key.rs","lib.rs","state_store.rs"]],\
"matrix_sdk_sqlite":["",[],["error.rs","lib.rs","utils.rs"]],\
"matrix_sdk_store_encryption":["",[],["lib.rs"]]\
}');
createSourceSidebar();
