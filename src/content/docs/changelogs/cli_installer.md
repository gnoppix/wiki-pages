---
title: Gnoppix CLI Installer Chagelog
description: Changelogs CLI Installer
---
3.0.2
---- 
### New features

    Wayfire support by @Mohamed-elg in #3020 (prematurely included in the release, but will be removed in 3.0.3 because it's an AUR package. The arch package archinstall-3.0.2-2 has this profile removed during packaging via a patch in the repositories and thus won't be selectable)

### Changes & Fixes

    Improved code hygiene and cleanups by @correctmost in #2928, #2932, #2931, #2933, #2929, #2934, #2938, #2945, #2946, #2947, #2950, #2951, #2954, #2960, #2962, #2963, #2964, #2965, #2966, #2967, #2968, #2935, #2972, #2973, #2975, #2974, #2976, #2977, #2978, #2980, #2981, #2983, #2984, #2985, #2986, #2987, #2988, #3077, #3082, #3083, #3087, #3103, #3106, #3109, #3110, #3112, #3114, #3122, #3079
    Dataclasses for args and config by @svartkanin in #2936
    Fix #2916 - Reinstate prompt in list menus by @svartkanin in #2940
    btrfs improvements and fixes by @mgziminsky in #2970
    updating plasma.py by @zbikkk in #2998
    Replace deprecated pydantic parse_raw() by @codefiles in #3004
    Update partition flags value by @codefiles in #3006
    Refactor enable_sudo() by @codefiles in #3008
    Refactor set_hostname() by @codefiles in #3009
    Fix #2991 - Restructure the mirror list handling by @svartkanin in #3007
    Remove superfluous try in get_btrfs_info() by @codefiles in #3010
    Refactor set_mirrors() by @codefiles in #3011
    Fix pre-mounted Btrfs subvolumes root detection by @codefiles in #3014
    Replace commonprefix() with commonpath() by @codefiles in #3016
    Use ctrl+h for help menu trigger by @svartkanin in #2996
    Specified GNOME as an acronym by @lazysixoeight in #3023
    Remove disk retries and timeouts by @codefiles in #3025
    luks: remove superfluous _mapper_dev by @codefiles in #3031
    general: rework environment_vars by @codefiles in #3032
    mirrors: use pydantic model_validate_json() by @codefiles in #3033
    disk: move ENC_IDENTIFIER by @codefiles in #3034
    general: remove unspecified exception handling by @codefiles in #3035
    disk: change from_partition() parameters by @codefiles in #3039
    Rework profiles path by @codefiles in #3040
    Rework mount point argument by @codefiles in #3041
    Use Path.chmod() by @codefiles in #3051
    audio: remove incorrect use of dataclass by @codefiles in #3058
    audio: capitalize enums by @codefiles in #3067
    general: remove superfluous callbacks variable by @codefiles in #3075
    pacman/repo: update enum members to uppercase by @codefiles in #3076
    disk: rework manual partitioning by @codefiles in #3071
    audio: use StrEnum by @codefiles in #3084
    pacman/repo: use StrEnum by @codefiles in #3088
    disk: validate first partition start by @codefiles in #3096
    Docs: Use Matrix channel invite link by @melroy89 in #3098
    Change to import Path for consistency by @codefiles in #3101
    Make libera.chat irc link clickable by @melroy89 in #3099
    Use list comprehension by @codefiles in #3105
    Fix Btrfs subvolume mount options by @codefiles in #3108
    Remove superfluous /usr/bin/ from commands by @codefiles in #3115
    Refactor cmd path check using startswith() by @codefiles in #3117
    disk: add udev sync after partitioning by @codefiles in #3119
    disk: add support for creating swap partitions by @codefiles in #3129
    Refactor preparations for fs type and encryption by @codefiles in #3130
    Replace list with link to contributors page by @codefiles in #3102
    Fix #3081 - Local mirrorlist parsing bug by @svartkanin in #3104
    Fix #3091 - scrolling in console by @svartkanin in #3113
    Fix misaligned table headers by @svartkanin in #3120
    Add skip for partitioning menus by @svartkanin in #3121
    Fix remote mirrorlist parsing by @svartkanin in #3136
    Fixed pylint not requiring root during build by @Torxed in #3138

