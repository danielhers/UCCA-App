# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2018-02-01 07:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uccaApp', '0003_auto_20180201_0706'),
    ]

    operations = [
        migrations.RenameField(
            model_name='annotation_units',
            old_name='annotation_unit_tree_id',
            new_name='tree_id',
        ),
        migrations.AddField(
            model_name='annotation_remote_units_annotation_units',
            name='remote_unit_tree_id',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
    ]
