# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2018-01-30 20:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uccaApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='annotation_remote_units_annotation_units',
            name='remote_unit_tree_id',
            field=models.CharField(default=None, max_length=200, null=True),
        ),

    ]
